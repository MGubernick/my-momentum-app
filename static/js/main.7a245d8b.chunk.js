(this["webpackJsonpmy-momentum-app"]=this["webpackJsonpmy-momentum-app"]||[]).push([[0],{33:function(e,t){},41:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(32),i=n.n(c),r=(n(41),n(10)),s=n(11),o=n(13),l=n(12),d=n(3),u=n(15),h=n.n(u),j=n(36),p=n(1),b=function(e){var t=e.zipCode,n=e.handleSubmit,a=e.handleChange;return Object(p.jsxs)("form",{onSubmit:n,style:{display:"flex",flexDirection:"row"},children:[Object(p.jsx)("h5",{children:"Check The Weather!:\xa0\xa0 "}),Object(p.jsx)("input",{required:!0,style:{border:"1px solid  #000",opacity:".5",textShadow:".5px .5px #28d3ee"},placeholder:"Enter Zipcode Here",name:"zipCode",value:t,onChange:a}),Object(p.jsx)(j.a,{variant:"outline-secondary",style:{color:"#28d3ee",textShadow:"1px 1px #000"},type:"submit",children:"Let's Take A Look!"})]})},m=n(16),x={apiUrl:"https://api.openweathermap.org/data/2.5/forecast?units=imperial&us&appid=".concat("1c4b5fde466659fdfea9e7a47c6a5be6","&zip=")},f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleChange=function(e){e.persist(),a.setState({zipCode:e.target.value})},a.clearZip=function(){a.setState({weather:"",zipCode:"",city:"",description:"",feelsLike:"",humidity:""})},a.handleSubmit=function(e){e.preventDefault(),h.a.get("".concat(x.apiUrl).concat(a.state.zipCode)).then((function(e){return a.setState({weather:e.data.list[0].main.temp,city:e.data.city.name,description:e.data.list[0].weather[0].description,feelsLike:e.data.list[0].main.feels_like,humidity:e.data.list[0].main.humidity})})).then(console.log("Wee!")).catch((function(e){console.error(e.message)})),e.target.reset()},a.state={weather:"",zipCode:"",city:"",description:"",feelsLike:"",humidity:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e,t=this.state,n=t.weather,a=t.city,c=t.description,i=t.feelsLike,r=t.humidity;return e=n||a||c||i||r?Object(p.jsx)("div",{className:"forecast-div",style:{border:"1px solid #000",opacity:"0.5"},children:Object(p.jsxs)(m.a,{className:"display-card",onClick:this.clearZip,children:[Object(p.jsxs)(m.a.Text,{className:"city key",children:[Object(p.jsx)("strong",{children:"Your Forecast for:"})," ",a," "]}),Object(p.jsxs)(m.a.Text,{className:"key",children:[Object(p.jsx)("strong",{children:"Current Temp:"})," ",n,"\xb0F \xa0 (feels like: ",i,")"]}),Object(p.jsx)(m.a.Text,{className:"key",children:Object(p.jsx)("strong",{children:"What To Expect:"})}),Object(p.jsxs)(m.a.Text,{className:"value",children:[Object(p.jsx)("strong",{children:"humidity:"})," ",r,"%",Object(p.jsx)("br",{}),c]})]})}):"",Object(p.jsxs)("div",{className:"zip-code-form-display",children:[Object(p.jsx)("br",{}),Object(p.jsx)(b,{weather:n,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),e]})}}]),n}(a.Component),O=n(33),y=n.n(O),v="https://type.fit/api/quotes",g=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={quote:"",quoteAuthor:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(v)).then((function(e){return e.data[Math.floor(Math.random()*e.data.length)]})).then((function(t){e.setState({quote:t.text,quoteAuthor:t.author})})).catch((function(e){console.error("oops: ",e.message)}))}},{key:"render",value:function(){var e=this.state,t=e.quote,n=e.quoteAuthor;return Object(p.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"10px"},children:[Object(p.jsxs)("h3",{style:{padding:"12px"},children:['"',t,'"']}),Object(p.jsxs)("p",{style:{fontSize:"20px"},children:[Object(p.jsxs)("small",{children:["- ",n||"unknown"]})," "]})]})}}]),n}(a.Component),k=n(34),C=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(r.a)(this,n),a=t.call(this,e);var c=k.DateTime.now();return a.state={date:c.toFormat("LLL dd, yyyy"),time:c.toFormat("t")},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.date,n=e.time;return Object(p.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(p.jsx)("h1",{style:{fontSize:"50px"},children:t}),Object(p.jsx)("h1",{style:{fontSize:"50px"},children:n})]})}}]),n}(a.Component),S=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={imageUrl:"",description:""},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"display-post",style:{fontSize:"30px"},children:[Object(p.jsx)("div",{className:"display-component-weather",style:{fontSize:"15px"},children:Object(p.jsx)(f,{})}),Object(p.jsx)("div",{className:"display-component-clock",style:{marginTop:"150px"},children:Object(p.jsx)(C,{})}),Object(p.jsx)("div",{className:"display-component-quote",style:{marginTop:"180px"},children:Object(p.jsx)(g,{})})]})}}]),n}(a.Component),w={apiUrl:"https://api.unsplash.com/photos/random?client_id=".concat("S3sZRiZ7S5jo0vjtpoabAM8IjTbcK4nnEdjQ4VHT3zM")},z=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={user:null,imageUrl:"",description:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(w.apiUrl)).then((function(t){return e.setState({imageUrl:t.data.urls.full,description:t.data.alt_description})})).catch((function(e){console.error("oops: ",e.message)}))}},{key:"render",value:function(){var e=this.state.imageUrl;return Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"120vh",width:"100vw"},children:Object(p.jsxs)("main",{children:[Object(p.jsx)(d.a,{path:"/weather",render:function(){return Object(p.jsx)(f,{})}}),Object(p.jsx)(d.a,{path:"/layout",render:function(){return Object(p.jsx)(y.a,{})}}),Object(p.jsx)(d.a,{path:"/quote",render:function(){return Object(p.jsx)(g,{})}}),Object(p.jsx)(d.a,{path:"/clock",render:function(){return Object(p.jsx)(C,{})}}),Object(p.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(p.jsx)(S,{})}})]})})}}]),n}(a.Component),T=n(20),N=Object(p.jsx)(T.a,{children:Object(p.jsx)(z,{})});i.a.render(N,document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7a245d8b.chunk.js.map