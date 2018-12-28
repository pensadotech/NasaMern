(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(45)},22:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=(t(22),t(1)),s=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:"./images/nasa1.png",alt:"NasaLogo"})),r.a.createElement("div",{className:"col-md-3 headerLetters"}),r.a.createElement("div",{className:"col-md-5"}))))}}]),a}(n.Component),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark justify-content-end"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"collapsibleNavbar"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item ml-auto"},r.a.createElement("a",{className:"nav-link",href:"#home",onClick:function(){return e.props.handlePageChange("Home")}},"Home")),r.a.createElement("li",{className:"nav-item ml-auto"},r.a.createElement("a",{className:"nav-link",href:"#scrapearticles",onClick:function(){return e.props.handlePageChange("Search")}},"Get Articles")),r.a.createElement("li",{className:"nav-item ml-auto"},r.a.createElement("a",{className:"btn btn-secondary",onClick:function(){return e.props.handleDeleteAllArticles()}},"Delete All Articles"))))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark justify-content-end"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"collapsibleNavbar"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item ml-auto"},r.a.createElement("a",{className:"nav-link",href:"#home",onClick:function(){return e.props.handlePageChange("Home")}},"Home")),r.a.createElement("li",{className:"nav-item ml-auto"},r.a.createElement("a",{className:"btn btn-secondary",onClick:function(){return e.props.handleSearchNewArticles()}},"Scrap Articles")),r.a.createElement("li",{className:"nav-item ml-auto"},r.a.createElement("a",{className:"btn btn-secondary",onClick:function(){return e.props.handleClearScreen()}},"Clear Screen"))))))}}]),a}(n.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 px-3"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{className:"card-img-top imageShadow imgRnd10 articleImg",src:this.props.image}))),r.a.createElement("div",{className:"col-md-8 px-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null," pubId: ",this.props.pubId," / ",this.props.pubDate),r.a.createElement("h5",{className:"card-title"},this.props.title),r.a.createElement("p",null," ",this.props.description," "),r.a.createElement("div",{className:"d-flex flex-row-reverse"},r.a.createElement("a",{id:"btnReadMore",href:this.props.url,target:"_blank",className:"btn btn-light"},"Read more"),r.a.createElement("button",{id:"btnDelete",className:"btn btn-secondary",value:this.props.pubId,onClick:function(){return e.props.handleDeleteArticle(e.props.pubId)}},"Delete Article")))))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.articles.length?r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"articlesList"},this.props.articles.map(function(a){return r.a.createElement(b,{key:a.pubId,pubId:a.pubId,title:a.title,description:a.description,image:a.image,url:a.url,pubDate:a.pubDate,handleDeleteArticle:e.props.handleDeleteArticle})}))):null)}}]),a}(n.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 px-3"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{className:"card-img-top imageShadow imgRnd10 articleImg",src:this.props.image}))),r.a.createElement("div",{className:"col-md-8 px-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null," pubId: ",this.props.pubId," / ",this.props.pubDate),r.a.createElement("h5",{className:"card-title"},this.props.title),r.a.createElement("p",null," ",this.props.description," "),r.a.createElement("div",{className:"d-flex flex-row-reverse"},r.a.createElement("a",{id:"btnReadMore",href:this.props.url,target:"_blank",className:"btn btn-light"},"Read more"),r.a.createElement("button",{id:"btnSave",className:"btn btn-secondary",value:this.props.pubId,onClick:function(){return e.props.handleSaveArticle(e.props.pubId)}},"Save Article")))))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.articles.length?r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"articlesList"},this.props.articles.map(function(a){return r.a.createElement(g,{key:a.pubId,pubId:a.pubId,title:a.title,description:a.description,image:a.image,url:a.url,pubDate:a.pubDate,handleSaveArticle:e.props.handleSaveArticle})}))):null)}}]),a}(n.Component),E=t(7),N=t.n(E),A={getArticles:function(){return N.a.get("/api/articles")},getArticle:function(e){return N.a.get("/api/articles/"+e)},createUpdateArticle:function(e){return N.a.post("/api/articles",e)},deleteArticle:function(e){return N.a.delete("/api/articles/"+e)},deleteAllArticles:function(){return console.log("deleteAllArticles"),N.a.delete("/api/deleteallarticles")},scrapArtilces:function(){return N.a.get("/api/scrapArtilces")}},j=(t(43),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={articles:[],newarticles:[],currentPage:"Home"},t.loadArticles=function(){A.getArticles().then(function(e){t.setState({articles:e.data})}).catch(function(e){return console.log(e)})},t.findArticleById=function(e,a){for(var t=null,n=0;n<a.length;n++){var r=a[n];if(r.pubId===e){t=r;break}}return t},t.handleSearchNewArticles=function(e){A.scrapArtilces().then(function(e){var a=e.data;t.setState({newarticles:a})}).catch(function(e){return console.log(e)})},t.handleClearScreen=function(e){t.setState({newarticles:[]})},t.handleDeleteAllArticles=function(e){A.deleteAllArticles().then(function(e){t.loadArticles()}).catch(function(e){return console.log(e)})},t.handleDeleteArticle=function(e){var a=t.state.articles,n=t.findArticleById(e,a);A.deleteArticle(n._id).then(function(e){t.loadArticles()}).catch(function(e){return console.log(e)})},t.handleSaveArticle=function(e){var a=t.state.newarticles,n=t.findArticleById(e,a);A.createUpdateArticle(n).then(function(e){var r=a.indexOf(n);a.splice(r,1),t.setState({newarticles:a}),t.loadArticles()}).catch(function(e){return console.log(e)})},t.handlePageChange=function(e){t.setState({currentPage:e})},t.renderPage=function(){return"Search"===t.state.currentPage?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{handlePageChange:t.handlePageChange,handleSearchNewArticles:t.handleSearchNewArticles,handleClearScreen:t.handleClearScreen}),r.a.createElement(f,{articles:t.state.newarticles,handleSaveArticle:t.handleSaveArticle})):r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{handlePageChange:t.handlePageChange,handleDeleteAllArticles:t.handleDeleteAllArticles}),r.a.createElement(v,{articles:t.state.articles,handleDeleteArticle:t.handleDeleteArticle}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadArticles()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),this.renderPage())}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.a0a55098.chunk.js.map