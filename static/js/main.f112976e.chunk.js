(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{127:function(e,t,n){},425:function(e,t,n){},427:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),s=n(17),o=n.n(s),a=(n(127),n(49)),i=n(50),h=n(52),l=n(51),b=n(1),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r)}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},O=(n(129),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:" Oooops. That is not good "}):this.props.children}}]),n}(r.Component)),p=(n(425),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onSearchChange=function(e){r.setState({searchfield:e.target.value})},r.state={robots:[],searchfield:""},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(O,{children:Object(b.jsx)(d,{robots:r})})})]}):Object(b.jsx)("h1",{children:"Loading"})}}]),n}(c.a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,428)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(426);o.a.render(Object(b.jsx)(p,{}),document.getElementById("root")),g()}},[[427,1,2]]]);
//# sourceMappingURL=main.f112976e.chunk.js.map