(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),s=(n(26),n(17),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),d=n(11),b=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 "},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},p=function(e){return e.robots.map(function(e){return a.a.createElement(b,{key:e.id,id:e.id,name:e.name,email:e.email})})},E=function(e){var t=e.searchField,n=e.searchChanged;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{value:t,onChange:n,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))},m=(n(31),function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"910px"}},e.children)}),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),t}(r.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),t}(r.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChanged,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a.a.createElement("div",{className:"tc"},a.a.createElement(O,null),a.a.createElement(E,{searchChanged:n}),o&&a.a.createElement("h2",null,"Loading..."),a.a.createElement(m,null,a.a.createElement(f,null,a.a.createElement(p,{robots:c}))))}}]),t}(r.Component),j=Object(d.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChanged:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(g),y=n(8),v=n(9),R={searchField:""},S={isPending:!1,robots:[],error:""},C=n(19),_=n(20),w=Object(y.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(v.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(v.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(v.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(v.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(C.createLogger)(),F=Object(y.d)(w,Object(y.a)(_.a,T));c.a.render(a.a.createElement(d.a,{store:F},a.a.createElement(j,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1af80800.chunk.js.map