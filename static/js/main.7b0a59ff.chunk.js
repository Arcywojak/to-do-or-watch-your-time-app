(this["webpackJsonpto-do-or-appointment-app"]=this["webpackJsonpto-do-or-appointment-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/ok.93ce7e51.svg"},function(e,t,a){e.exports=a.p+"static/media/trash-black.8ab5bde4.svg"},function(e,t,a){e.exports=a.p+"static/media/added.4ef06c47.svg"},function(e,t,a){e.exports=a.p+"static/media/timeToDo.e488398a.svg"},function(e,t,a){e.exports=a.p+"static/media/trash.8ab5bde4.svg"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/happy.18abdd3a.svg"},function(e,t,a){e.exports=a.p+"static/media/sad.2c43fc8f.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(5),i=a.n(o),r=(a(16),a(1)),l=a(3),s=a(2),u=a.n(s),m=function(e,t){switch(console.log(e),t.type){case"ADD_TASK":var a=new Date;return[{id:u()(),title:t.task.title,howLong:t.task.howLong,unitOfTime:t.task.time,addTimeInMilisec:a.getTime()}].concat(Object(l.a)(e));case"REMOVE_TASK":return e.filter((function(e){return e.id!==t.id}));case"UPDATE_TIME":var n=e.findIndex((function(e){return e.id===t.id})),c=e;return c[n].howLong=t.howLong,e=c;default:return e}},d=Object(n.createContext)(),f=function(e){var t=e.children,a=Object(n.useReducer)(m,[],(function(){var e=localStorage.getItem("tasks");return"undefined"!==e?JSON.parse(e):[]})),o=Object(r.a)(a,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(i))}),[i]),c.a.createElement(d.Provider,{value:{tasks:i,ToDoDispatch:l}},t)},v=function(e,t){switch(t.type){case"ADD_DONE":var a=new Date;return[{id:u()(),title:t.title,success:t.success,added:a.toLocaleString()}].concat(Object(l.a)(e));case"REMOVE_TASK":return e.filter((function(e){return e.id!==t.id}));default:return e}},p=Object(n.createContext)(),E=function(e){var t=e.children,a=Object(n.useReducer)(v,[],(function(){var e=localStorage.getItem("done");return"undefined"!==e?JSON.parse(e):[]})),o=Object(r.a)(a,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){localStorage.setItem("done",JSON.stringify(i))}),[i]),c.a.createElement(p.Provider,{value:{done:i,DoneDispatch:l}},t)},g=function(){Object(n.useContext)(d).tasks,Object(n.useContext)(p).done;return c.a.createElement("header",null,c.a.createElement("h1",null,"Another do to list..."))},h=a(6),b=a.n(h),O=a(7),D=a.n(O),k=Object(n.createContext)(),y=function(e){var t=e.children,a=Object(n.useState)(!0),o=Object(r.a)(a,2),i=o[0],l=o[1];return c.a.createElement(k.Provider,{value:{component:i,setComponent:l}},t)},N=a(8),S=a.n(N),j=a(9),T=a.n(j),w=function(e){var t=e.task,a=Object(n.useContext)(d).ToDoDispatch,o=Object(n.useContext)(p).DoneDispatch,i=Object(n.useState)(k),r=(i.component,i.setComponent,(new Date).getTime()),l=[];l[t.id]=t.howLong-r;return c.a.createElement("li",{className:"li-item to-do"},c.a.createElement("div",null,t.title),c.a.createElement("div",{className:"img-and-text"},c.a.createElement("img",{src:T.a}),function(){var e=l[t.id],n=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5);if(n>0){var i=c?"and ".concat(c,"h"):"";return 1===n?"".concat(n," day ").concat(i):"".concat(n," days  ").concat(i)}var r=Math.floor(e%864e5/36e5),s=e%36e5/6e4;if(r>0){var u=Math.floor(s),m=u?"and ".concat(u,"m"):"";return 1===r?"".concat(r," hour ").concat(m):"".concat(r," hours ").concat(m)}return s>0?1===(s=Math.ceil(s))?"less than 1 minute":"".concat(s," minutes"):(a({type:"REMOVE_TASK",id:t.id}),o({type:"ADD_DONE",title:t.title,success:!1}),"TIME EXPIRED")}()),c.a.createElement("div",{className:"img-and-text"},c.a.createElement("img",{src:S.a}),function(e){var t=new Date-e;return(t/=216e5)<1?"Today":t<2?"Yesterday":"".concat(Math.floor(t)," days ago")}(t.addTimeInMilisec)),c.a.createElement("div",{className:"inside-image"},c.a.createElement("img",{src:b.a,alt:"ok",onClick:function(e){return function(e){e.target.parentNode.parentNode.classList.add("move-right"),setTimeout((function(){o({type:"ADD_DONE",title:t.title,success:!0}),a({type:"REMOVE_TASK",id:t.id})}),700)}(e)}})),c.a.createElement("div",{className:"inside-image",onClick:function(){a({type:"REMOVE_TASK",id:t.id})}},c.a.createElement("img",{src:D.a,alt:"trash"})))},C=function(){var e=Object(n.useContext)(d).tasks;return e.length?c.a.createElement("div",{className:"list-of-tasks"},c.a.createElement("ul",null,e.map((function(e){return c.a.createElement(w,{task:e,key:e.id})})))):c.a.createElement("div",{className:"list-of-tasks-empty"},c.a.createElement("h1",null,"You have nothing to do, right now."))},x=function(){var e=Object(n.useContext)(d).ToDoDispatch,t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(1),s=Object(r.a)(l,2),u=s[0],m=s[1],f=Object(n.useState)("Minute(s)"),v=Object(r.a)(f,2),p=v[0],E=v[1],g=function(e){"-"===e&&u>1?m(u-1):"+"===e&&m(u+1)};return c.a.createElement("div",{className:"to-do-form"},c.a.createElement("form",{className:"form",onSubmit:function(t){!function(t){t.preventDefault();var a=1e3*u*60;console.log(60*a),"Hour(s)"===p?a*=60:"Day(s)"===p&&(a*=1440),e({type:"ADD_TASK",task:{title:o,howLong:a+(new Date).getTime(),unit:p}}),i(""),m(1)}(t)}},c.a.createElement("div",{className:"inside-form"},c.a.createElement("div",{className:"inputs"},c.a.createElement("div",{className:"single-input first"},c.a.createElement("label",{for:"title"},"Title:"),c.a.createElement("input",{id:"title",name:"title",type:"text",required:!0,placeholder:"e.g. to go sleeping...",value:o,onChange:function(e){i(e.target.value)}}),c.a.createElement("br",null)),c.a.createElement("div",{className:"single-input second"},c.a.createElement("label",{for:"time"},"Duration:"),c.a.createElement("div",{class:"input-number"},c.a.createElement("input",{type:"button",onClick:function(){g("-")},value:"-"}),c.a.createElement("input",{type:"number",value:u,name:"time",id:"time",readOnly:!0}),c.a.createElement("input",{type:"button",onClick:function(){g("+")},value:"+"})),c.a.createElement("select",{onChange:function(e){E(e.target.value)}},c.a.createElement("option",null,"Minute(s)"),c.a.createElement("option",null,"Hour(s)"),c.a.createElement("option",null,"Day(s)")))),c.a.createElement("input",{className:"submit-btn",type:"submit",value:"Add new task"}))))},M=function(e){var t=e.setWhatContent,a=function(e){var a=document.querySelector(".nav-option.first"),n=document.querySelector(".nav-option.second");"first"===e?(t(!0),a.classList.add("active"),n.classList.remove("active")):(t(!1),n.classList.add("active"),a.classList.remove("active"))};return c.a.createElement("div",{className:"nav"},c.a.createElement("div",{className:"nav-grid"},c.a.createElement("div",{className:"nav-option first active",onClick:function(){a("first")}},"To do"),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"nav-option second",onClick:function(){a("second")}},"Done")))},A=(a(17),a(18),a(10)),I=a.n(A),L=function(e){var t=e.done,a=e.DoneDispatch;return c.a.createElement("li",{class:"li-item done"},c.a.createElement("div",null,t.title),c.a.createElement("div",null,c.a.createElement("img",{onClick:function(e){!function(e){e.target.parentNode.parentNode.classList.add("move-right"),setTimeout((function(){a({type:"REMOVE_TASK",id:t.id})}),700)}(e)},src:I.a})))},_=function(){var e=Object(n.useContext)(p),t=e.done,a=e.DoneDispatch;return t.length?c.a.createElement("div",{className:"list-of-tasks"},c.a.createElement("ul",null,t.map((function(e){return c.a.createElement(L,{DoneDispatch:a,done:e,key:e.id})})))):c.a.createElement("div",{className:"list-of-tasks-empty"},c.a.createElement("h1",null,"You have done nothing at this moment"))};var R=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],o=t[1],i=a?c.a.createElement(C,null):c.a.createElement(_,null);return localStorage.getItem("tasks")||localStorage.setItem("tasks","[]"),localStorage.getItem("done")||localStorage.setItem("done","[]"),c.a.createElement("div",{className:"App"},c.a.createElement(f,null,c.a.createElement(E,null,c.a.createElement(y,null,c.a.createElement(g,null),c.a.createElement(x,null),c.a.createElement(M,{setWhatContent:o}),i))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.7b0a59ff.chunk.js.map