(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"http://www.simpsoncrazy.com/content/pictures/regulars/ComicBookGuy2.gif",clicked:!1},{id:2,image:"http://www.simpsoncrazy.com/content/pictures/regulars/BarneyBikini.gif",clicked:!1},{id:3,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Apu1.gif",clicked:!1},{id:4,image:"http://www.simpsoncrazy.com/content/pictures/regulars/MrBurns4.gif",clicked:!1},{id:5,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Cletus1.gif",clicked:!1},{id:6,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Duffman.gif",clicked:!1},{id:7,image:"http://www.simpsoncrazy.com/content/pictures/regulars/NedFlanders2.gif",clicked:!1},{id:8,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Krusty8.gif",clicked:!1},{id:9,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Milhouse2.gif",clicked:!1},{id:10,image:"http://www.simpsoncrazy.com/content/pictures/regulars/GroundskeeperWilly1.gif",clicked:!1},{id:11,image:"http://www.simpsoncrazy.com/content/pictures/regulars/RalphWiggum4.gif",clicked:!1},{id:12,image:"http://www.simpsoncrazy.com/content/pictures/regulars/MoeSzyslak1.gif",clicked:!1}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(3),i=n.n(a),l=n(4),o=n(5),s=n(7),u=n(6),m=n(8),d=(n(15),function(e){return r.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))}),h=(n(16),function(e){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"brand animated lightSpeedIn"},r.a.createElement("a",{href:"/clicky-game/"},e.title)),r.a.createElement("li",{id:"rw"},e.rightWrong),r.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),r.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),p=(n(17),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),f=(n(18),function(e){return r.a.createElement("h1",{className:"title"},e.children)}),g=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},w=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return r.a.createElement("div",{className:t},e.children)},S=n(1);n(19);var y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={friends:S,currentScore:0,topScore:0,rightWrong:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,rightWrong:""}),e>n.state.topScore?n.setState({topScore:e}):12===e&&n.setState({rightWrong:"You win!"}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,rightWrong:"D'oh! HA-HA!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e}(S);n.setState({friends:e})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p,null,r.a.createElement(h,{title:"Simpsons Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),r.a.createElement(f,null,"Try to click on each character, but don't hit any duplicates!"),r.a.createElement(g,null,r.a.createElement(w,null,this.state.friends.map(function(t){return r.a.createElement(k,{size:"md-3 sm-6"},r.a.createElement(d,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(c.Component);n(20);i.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0f1a8558.chunk.js.map