(this["webpackJsonpexplo-foundation"]=this["webpackJsonpexplo-foundation"]||[]).push([[0],{29:function(e,t,s){},30:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var r=s(1),i=s.n(r),o=s(23),n=s.n(o),c=s(15),a=(s(29),s(30),s(7)),l=s(8),d=s(10),h=s(9),j=s(2),u="/visit/",p=[{href:"".concat(u,"calendars"),title:"Calendars"},{href:"".concat(u,"after-dark"),title:"After Dark Thursdays"},{href:"".concat(u,"tickets"),title:"Reserve Tickets"},{href:"".concat(u,"exhibits"),title:"Exhibits"},{href:"".concat(u,"galleries"),title:"Galleries"},{href:"".concat(u,"art"),title:"Artworks on View"},{href:"".concat(u,"hours"),title:"Hours"},{href:"".concat(u,"getting-here"),title:"Getting Here"}],x=[{href:"".concat(u,"calendars"),title:"Professional Development Programs"},{href:"".concat(u,"after-dark"),title:"Free Educator Workshops"},{href:"".concat(u,"tickets"),title:"Tools for Teaching and Learning"},{href:"".concat(u,"exhibits"),title:"Learning About Learning"},{href:"".concat(u,"galleries"),title:"Community Programs"},{href:"".concat(u,"art"),title:"Educator Newsletter"}],b=[{href:"".concat(u,"calendars"),title:"Browse by Subject"},{href:"".concat(u,"after-dark"),title:"Activities"},{href:"".concat(u,"tickets"),title:"Video"},{href:"".concat(u,"exhibits"),title:"Exhibits"},{href:"".concat(u,"galleries"),title:"Apps"},{href:"".concat(u,"art"),title:"Blogs"},{href:"".concat(u,"hours"),title:"Websites"}],f=[{href:"".concat(u,"calendars"),title:"Our Story"},{href:"".concat(u,"after-dark"),title:"Partnerships"},{href:"".concat(u,"tickets"),title:"Global Collaborations"},{href:"".concat(u,"exhibits"),title:"Explore Our Reach"},{href:"".concat(u,"galleries"),title:"Arts at the Exploratorium"},{href:"".concat(u,"art"),title:"Contact Us"}],m=[{href:"".concat(u,"calendars"),title:"Donate today!"},{href:"".concat(u,"after-dark"),title:"Membership"},{href:"".concat(u,"tickets"),title:"Join our donor community"},{href:"".concat(u,"exhibits"),title:"Engage your business"},{href:"".concat(u,"galleries"),title:"Attend a fundraiser"},{href:"".concat(u,"art"),title:"Explore our reach"},{href:"".concat(u,"hours"),title:"Thank you to our supporters"},{href:"".concat(u,"getting-here"),title:"Donor & Corporate Member FAQ"},{href:"".concat(u,"getting-here"),title:"Host your event"},{href:"".concat(u,"getting-here"),title:"Volunteer"}],O=s(0),g=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={dropdownLinks:[],shouldDropdownDisplay:Boolean},e.displayLinks=function(){var t=[];return e.state.dropdownLinks.forEach((function(e,s){t.push(Object(O.jsx)(c.c,{to:e.href,children:e.title}))})),t},e.handleMouseOver=function(){e.setState({shouldDropdownDisplay:!0})},e.handleMouseLeave=function(){e.setState({shouldDropdownDisplay:!1})},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){"Visit"===this.props.type?this.setState({dropdownLinks:p}):"Education"===this.props.type?this.setState({dropdownLinks:x}):"Explore"===this.props.type?this.setState({dropdownLinks:b}):"About Us"===this.props.type?this.setState({dropdownLinks:f}):this.setState({dropdownLinks:m}),this.setState({shouldDropdownDisplay:!1})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"dropdown",onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,children:[Object(O.jsx)(c.c,{to:"/visit",children:Object(O.jsx)(j.MenuItem,{children:this.props.type})}),Object(O.jsx)("div",{className:"dropdown-links",onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,style:this.state.shouldDropdownDisplay?{dispay:"block"}:{display:"none"},children:this.displayLinks()})]})}}]),s}(r.Component),y=s.p+"static/media/explo-logo-white.974ca580.svg",v=(s(61),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("img",{className:"explo-logo",alt:"Exploratorium",src:y,height:"5px"})}),Object(O.jsxs)(j.Menu,{children:[Object(O.jsx)(g,{type:"Visit"}),Object(O.jsx)(g,{type:"Education"}),Object(O.jsx)(g,{type:"Explore"}),Object(O.jsx)(g,{type:"About Us"}),Object(O.jsx)(g,{type:"Join + Support"})]}),Object(O.jsxs)("div",{className:"search-container",children:[Object(O.jsx)("div",{className:"search"}),Object(O.jsx)("img",{alt:"",src:"https://www.exploratorium.edu/sites/default/files/site/baseline_search_white_18dp.png",height:"10"})]})]})}}]),s}(r.Component)),w=s(5),_=s.p+"static/media/foundation-banner.c27606dc.jpg",k=(s(62),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"home-banner-container",children:[Object(O.jsx)("img",{className:"home-banner",alt:"",src:_}),Object(O.jsxs)("div",{className:"banner-overlay",children:[Object(O.jsx)("strong",{children:"Welcome"}),Object(O.jsx)("p",{children:"Welcome to Eduardo's Exploratorium React Website"})]})]})}}]),s}(r.Component)),S=(s(63),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"home-page",children:[Object(O.jsx)(k,{}),Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)("div",{className:"grid-2",children:[Object(O.jsxs)("div",{className:"left-grid",children:[Object(O.jsx)("h2",{children:"Experience the Exploratorium at Pier 15"}),Object(O.jsx)("strong",{color:j.Colors.ALERT,children:"Today's hours are 10:00 a.m.\u20135:00 p.m."}),Object(O.jsx)("br",{}),Object(O.jsx)("strong",{style:{textDecoration:"underline"},children:"Museum Hours*"}),Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Wednesday\u2013Saturday: 10:00 a.m.\u20135:00 p.m."}),Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Thursday (Ages 18+): 6:00\u201310:00 p.m."}),Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Sunday (Daytime Members/Donors Only): 10:00 a.m.\u2013Noon"}),Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Sunday: Noon\u20135:00 p.m."}),Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Monday and Tuesday: Closed"}),Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"*Except select days"}),Object(O.jsx)("br",{})]}),Object(O.jsx)("div",{className:"right-grid",children:Object(O.jsxs)("div",{className:"pod",children:[Object(O.jsx)("img",{className:"pod-img",alt:"",src:_}),Object(O.jsx)("a",{href:"/documentation",children:"Foundation"}),Object(O.jsx)("p",{children:"Check out the documentation page for Explo w/ Foundation"})]})})]})})]})}}]),s}(r.Component)),E=[{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/tickets960x453_2.jpg?itok=7yq4ZXpb",header:"Buy Tickets",content:"The Exploratorium is temporarily closed."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/calendar/AD_Pod_380x213_07.png?itok=18B1Kaq0",header:"After Dark Online",content:"From our home to yours, digital dispatches from After Dark"},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/Corona_Pod_380x213.jpg?itok=KG9_EfjQ",header:"Novel Coronavirus Disease (COVID-19)",content:"Your health and safety is our top priority."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/location_streetcar960x453.jpg?itok=fSG4bSgA",header:"Getting Here",content:"It's easy to get to Pier 15 on the Embarcadero by transit, car, or bike."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/feature_slides/Building_DSC_0369_AS_crop_0.jpg?itok=X7iGzI-C",header:"Open Hours",content:"The Exploratorium is temporarily closed."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/01_DSC_8802-3.jpg?itok=PwYS-MTR",header:"Become a Member",content:"Help the Exploratorium recover! Enjoy member perks now, plus 12 months of free entry and more when we reopen."}],C=[{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/brightcove_stills/979328832001_1839175140001_explore-480.jpg?itok=B78PPpWB",header:"Exploring Distant Worlds on Earth",content:"Explore other planets\u2014or remote places here on Earth."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/external-content/arctic-birds_0.jpg?itok=i0D87XyF",header:"Arctic Birds",content:"Summertime in the Arctic is for the birds"},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/brightcove_stills/979328832001_1826615174001_land-720.jpg?itok=QrcVOkRy",header:"Time on Mars",content:"Time is time wherever you are...right?"},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/great_satellite_search.jpg?itok=5FHlglsE",header:"The Great Satellite Search!",content:"Students become Internet researchers and learn about NASA satellites."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/brightcove_stills/979328832001_4816128138001_4816082967001-vs.jpg?itok=Y-O_BTMq",header:"Truly Primary Pigments",content:"Watch colors play in this quick exploration of layering hues."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/brightcove_stills/979328832001_2083989461001_900944612-170-1357776360932.jpg?itok=pvOnpNxj",header:"The Exploratorium Shop",content:"Visit the beating heart of the Exploratorium\u2014our shop."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/external-content/balloffbat.jpg?itok=DX2tEBho",header:"Minimizing Handle Forces",content:""},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/brightcove_stills/979328832001_4570976020001_4443977120001-vs.jpg?itok=Le-WIjLF",header:"Indicating Electrolysis: Teaching tips",content:"Got questions about electrolysis in the classroom? We've got answers."},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/alzheimers.jpg?itok=jefRpbnQ",header:"Autonomy on Endless Trial",content:"Consider the possible effects of early Alzheimer's diagnosis."}],A=[{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/ti-pod.jpg?itok=OEDZtYyN",header:"Teacher Institue",content:"Hands-on, inquiry-rich experiences for secondary science and math teachers"},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/feature_slides/light-island_0.jpg?itok=ap7YJ9rg",header:"Institue for Inquiry",content:"Inquiry-based professional development for K\u20135 educators and leaders"},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/external-content/tinkering-studio_0.jpg?itok=m5J2JlpL",header:"The Tinkering Studio",content:"Activities and workshops for playful invention, investigation, and collaboration"},{image:"https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/1-ca-educators-pod.jpg?itok=a3fYASLI",header:"Resources for California Educators",content:"Resources supporting implementation of the California Next Generation Science Standards"}],N=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={pods:[]},e.displayPods=function(){var t=[];return e.state.pods.forEach((function(e,s){s++,t.push(Object(O.jsxs)("div",{className:"pod",children:[Object(O.jsx)("img",{className:"pod-img",src:e.image,alt:""}),Object(O.jsx)("p",{children:e.header}),Object(O.jsx)("p",{children:e.content})]},s))})),t},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){console.log("I am mounted"),"visit"===this.props.type?this.setState({pods:E}):"explore"===this.props.type?this.setState({pods:C}):"education"===this.props.type&&this.setState({pods:A})}},{key:"render",value:function(){return console.log("I am the pod inside this container and I am rendered, these are my props",this.props),Object(O.jsx)("div",{className:"pod-container",children:Object(O.jsx)("div",{className:"pods",children:this.displayPods()})})}}]),s}(i.a.Component);var T=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"",src:"https://www.exploratorium.edu/sites/default/files/styles/banner_image/public/feature_slides/Corona_Banner_960x380_2.jpg?itok=wuGiGKPL"}),Object(O.jsx)("h1",{children:"The Exploratorium is temporarily closed."}),Object(O.jsx)(N,{type:"visit"})]})};s(64);var I=function(){return Object(O.jsxs)("div",{className:"tickets",children:[Object(O.jsx)("h1",{children:"Buy Tickets"}),Object(O.jsxs)("p",{children:["Ready to visit? And by that I mean visit this page. You probably aren't likely to click here but in the off chance that you do, hello I am Eduardo. I wanted to add some fun Easter Egg here. If you do find this then mention it in my presentation, whenever that is. I shall donate $20 to the charity of your choice. Yay!",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"They are nontransferable only because those three first words of this sentence are in the original page and I'm trying to hide this in plain site as best as I can. Unsure about what charity to donate to? Have a hard time deciding, but don\u2019t know the specific one? Consider purchasing an open-ended gift or just picking out of a hat."]}),Object(O.jsxs)("div",{className:"covid-notice",children:[Object(O.jsx)("p",{children:"In accordance with local and state public health orders and recommendations, I can also decide or we can donate to all of them in increments."}),Object(O.jsx)("p",{children:"We appreciate the understanding and patience of our community, and we hope this secret message finds you well."})]})]})};var B=function(){return Object(O.jsxs)("div",{className:"faq",children:[Object(O.jsx)("h1",{children:"Frequently Asked Questions"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"MUSEUM CLOSURE DURING COVID-19 PANDEMIC"}),Object(O.jsx)("p",{children:"In accordance with local and state public health orders and recommendations, the Exploratorium is temporarily closed to the public. Read more about the Exploratorium's COVID-19 response."}),Object(O.jsx)("hr",{})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"GETTING HERE"}),Object(O.jsx)("strong",{children:"Where is the Exploratorium located?"}),Object(O.jsx)("p",{children:"We\u2019re at Pier 15, which is on the Embarcadero at Green Street in San Francisco."}),Object(O.jsx)("hr",{})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("strong",{children:"How do I get to the Exploratorium?"}),Object(O.jsx)("p",{children:"See Getting Here for a Google map, directions, and public transportation options. You can also call our Guest Services department at (415) 528-4444 for additional help getting here."}),Object(O.jsx)("hr",{})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("strong",{children:"Where can I park?"}),Object(O.jsx)("p",{children:"There are numerous parking garages and lots near our Pier 15 campus. The museum partners with SP+ to offer a discount using the code 1234000 at these lots: Exploratorium Pier 15 Parking Lot and Pier 19 \xbd Parking Lot. For more parking information, see Getting Here. In addition, there is also metered parking on the Embarcadero and nearby streets. Please note, though, that the Exploratorium is easily accessible by public transportation from most of the Bay Area and that we provide bike racks for visitors."}),Object(O.jsx)("hr",{})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("strong",{children:"Is there a loading zone to drop people off before I park?"}),Object(O.jsx)("p",{children:"There is a white-curbed loading zone on the Embarcadero, just south of the museum, where you can drop people off or pick them up."}),Object(O.jsx)("hr",{})]})]})},P=Object(w.f)((function(){return Object(O.jsxs)(w.c,{children:[Object(O.jsx)(w.a,{exact:!0,path:"/visit",component:T}),Object(O.jsx)(w.a,{path:"/visit/tickets",component:I}),Object(O.jsx)(w.a,{path:"/visit/faq",component:B})]})})),D=[{text:"Tickets",href:"/visit/tickets"},{text:"Frequently Asked Questions",href:"/visit/faq"},{text:"Calendar",href:"/"},{text:"Hours",href:"/"},{text:"Getting Here",href:"/"},{text:"Museum Map",href:"/"},{text:"Reduced Rates & Community Day",href:"/"},{text:"Accessibility",href:"/"},{text:"Tips for Visiting with Kids",href:"/"},{text:"Exhibits",href:"/"},{text:"Tactile Dome",href:"/"},{text:"Artworks on View",href:"/"},{text:"Cinema Arts",href:"/"},{text:"Kanbar Forum",href:"/"},{text:"Black Box",href:"/"},{text:"Museum Galleries",href:"/"},{text:"Restaurant & Caf\xe9",href:"/"},{text:"School Field Trips",href:"/"},{text:"Groups / Tour Operators",href:"/"},{text:"Event Rentals",href:"/"},{text:"Exploratorium Store",href:"/"},{text:"Contact Us",href:"/"},{text:"Espa\xf1ol",href:"/"},{text:"\u7e41\u9ad4\u4e2d\u6587",href:"/"},{text:"\u7b80\u4f53\u4e2d\u6587",href:"/"},{text:"\ud55c\uad6d\uc5b4",href:"/"},{text:"Fran\xe7ais",href:"/"},{text:"Deutsch",href:"/"},{text:"Portugu\xeas",href:"/"},{text:"\u65e5\u672c\u8a9e",href:"/"}],R=[{text:"Professional Development Programs",href:"/"},{text:"Tools for Teaching and Learning",href:"/"},{text:"Advancing Ideas about Learning",href:"/"},{text:"Community Programs",href:"/"}],L=[{text:"Arts",href:"/"},{text:"History",href:"/"},{text:"Mathematics",href:"/"}],M=[{text:"Contact Info",href:"/"},{text:"Our Story",href:"/"},{text:"Our History",href:"/"},{text:"Fact Sheet",href:"/"},{text:"Impact Report",href:"/"},{text:"Fact Sheet",href:"/"},{text:"Awards",href:"/"},{text:"Arts at the Exploratorium",href:"/"},{text:"Newsletter",href:"/"},{text:"Arts at the Exploratorium",href:"/"},{text:"Educator Newsletter",href:"/"},{text:"Press Office",href:"/"},{text:"Senior Leadership",href:"/"},{text:"Board of Trustees",href:"/"},{text:"Board of Trustees Alumni",href:"/"},{text:"Staff Scientists",href:"/"},{text:"Staff Artists",href:"/"},{text:"Collaborations",href:"/"},{text:"Exhibit Making",href:"/"},{text:"Institute for Inquiry",href:"/"},{text:"Teacher Institute",href:"/"},{text:"Online Engagement",href:"/"},{text:"Teacher Institute",href:"/"},{text:"Explainer Programs",href:"/"},{text:"Studio for Public Spaces",href:"/"},{text:"Job Opportunities",href:"/"},{text:"Become a Volunteer",href:"/"},{text:"Follow & Share",href:"/"},{text:"FY19 Audit Report",href:"/"},{text:"990 FY18 Tax Return",href:"/"},{text:"Use Policy",href:"/"}],H=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={header:"",links:[]},e.displayAside=function(){var t=[];return e.state.links.forEach((function(e,s){s++,t.push(Object(O.jsx)("a",{href:e.href,children:e.text},s))})),t},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){"visit"===this.props.type?this.setState({links:D}):"education"===this.props.type?this.setState({links:R}):"explore"===this.props.type?this.setState({links:L}):"about"===this.props.type&&this.setState({links:M}),this.setState({header:this.props.asideHeader})}},{key:"render",value:function(){return console.log("I am the aside menu inside ".concat(this.props.asideHeader," and I am rendering")),Object(O.jsxs)("div",{className:"aside-links",children:[Object(O.jsx)("a",{href:this.props.asideHeaderLink,children:Object(O.jsx)("h4",{children:this.props.asideHeader})}),this.displayAside()]})}}]),s}(i.a.Component),G=(s(65),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return console.log("this is visit container and I am rendering"),console.log(this.props),Object(O.jsx)("div",{className:"visit content",children:Object(O.jsxs)("div",{className:"visit-content",children:[Object(O.jsx)("div",{className:"visit-aside",children:Object(O.jsx)(H,{asideHeader:"Visit",asideHeaderLink:"/visit",type:"visit"})}),Object(O.jsx)(P,{})]})})}}]),s}(i.a.Component)),F=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isAccordionActive:Boolean},e.dropAccordion=function(){console.log("click"),e.setState({isAccordionActive:!e.state.isAccordionActive})},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"documentation-container",children:[Object(O.jsxs)("div",{className:"button-basics-example",children:[Object(O.jsx)("h2",{children:"Buttons"}),Object(O.jsx)(j.Button,{children:"Regular Degular Schmegular"}),Object(O.jsx)(j.Button,{color:j.Colors.SUCCESS,children:"Success"}),Object(O.jsx)(j.Button,{color:j.Colors.ALERT,children:"Alert"}),Object(O.jsx)(j.Button,{className:"explo-button",children:"Explo Default"})]}),Object(O.jsxs)("div",{className:"buttons-sizes",children:[Object(O.jsx)("h2",{children:"Sizing"}),Object(O.jsx)(j.Button,{style:{marginRight:"1em"},size:j.Sizes.TINY,children:"So Tiny"}),Object(O.jsx)(j.Button,{style:{marginRight:"1em"},size:j.Sizes.SMALL,children:"So Small"}),Object(O.jsx)(j.Button,{style:{marginRight:"1em"},children:"So Basic"}),Object(O.jsx)(j.Button,{style:{marginRight:"1em"},size:j.Sizes.LARGE,children:"So Large"}),Object(O.jsx)(j.Button,{style:{marginRight:"1em"},isExpanded:!0,children:"Such Expand"}),Object(O.jsx)(j.Button,{style:{marginRight:"1em"},size:j.Sizes.TINY,isExpanded:!0,children:"Wow, Small Expand"})]}),Object(O.jsxs)("div",{className:"button-colors-example",children:[Object(O.jsx)("h2",{children:"Button Colors"}),Object(O.jsx)(j.Button,{color:j.Colors.PRIMARY,children:"Primary Color"}),Object(O.jsx)(j.Button,{color:j.Colors.SECONDARY,children:"Secondary Color"}),Object(O.jsx)(j.Button,{color:j.Colors.SUCCESS,children:"Success Color"}),Object(O.jsx)(j.Button,{color:j.Colors.ALERT,children:"Alert Color"}),Object(O.jsx)(j.Button,{color:j.Colors.WARNING,children:"Warning Color"}),Object(O.jsx)(j.Button,{isDisabled:!0,children:"Disabled Button"})]}),Object(O.jsxs)("div",{className:"button-hollow-example",children:[Object(O.jsx)("h2",{children:"Hollow Button Colors"}),Object(O.jsx)(j.Button,{color:j.Colors.PRIMARY,isHollow:!0,children:"Primary Color"}),Object(O.jsx)(j.Button,{color:j.Colors.SECONDARY,isHollow:!0,children:"Secondary Color"}),Object(O.jsx)(j.Button,{color:j.Colors.SUCCESS,isHollow:!0,children:"Success Color"}),Object(O.jsx)(j.Button,{color:j.Colors.ALERT,isHollow:!0,children:"Alert Color"}),Object(O.jsx)(j.Button,{color:j.Colors.WARNING,isHollow:!0,children:"Warning Color"})]}),Object(O.jsxs)("div",{className:"accordions-example",children:[Object(O.jsx)("h2",{children:"Accordions"}),Object(O.jsx)("p",{children:"Require state"}),Object(O.jsxs)(j.Accordion,{children:[Object(O.jsxs)(j.AccordionItem,{onClick:this.dropAccordion,children:[Object(O.jsx)(j.AccordionTitle,{children:"Accordion 1"}),Object(O.jsx)(j.AccordionContent,{style:this.state.isAccordionActive?{display:"block"}:null,children:Object(O.jsx)("p",{children:"First accordion contents"})})]}),Object(O.jsxs)(j.AccordionItem,{children:[Object(O.jsx)(j.AccordionTitle,{children:"Accordion 2"}),Object(O.jsx)(j.AccordionContent,{children:Object(O.jsx)("p",{children:"Second accordion contents"})})]}),Object(O.jsxs)(j.AccordionItem,{children:[Object(O.jsx)(j.AccordionTitle,{children:"Accordion 3"}),Object(O.jsx)(j.AccordionContent,{children:Object(O.jsx)("p",{children:"Third accordion contents"})})]})]})]})]})}}]),s}(r.Component),W=Object(w.f)((function(){return Object(O.jsxs)(w.c,{children:[Object(O.jsx)(w.a,{exact:!0,path:"/",component:S}),Object(O.jsx)(w.a,{path:"/explo-foundation",component:S}),Object(O.jsx)(w.a,{path:"/documentation",component:F}),Object(O.jsx)(w.a,{path:"/visit",component:G})]})})),Y=(s(66),function(){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsxs)("div",{className:"left-grid",children:[Object(O.jsx)("img",{className:"footer-logo",src:"https://www.exploratorium.edu/sites/default/files/site/explo-white.png",alt:""}),Object(O.jsxs)("div",{className:"left-links-container",children:[Object(O.jsxs)("div",{className:"address",children:[Object(O.jsxs)("p",{children:["Pier 15",Object(O.jsx)("br",{}),"(Embarcadero at Green Street)",Object(O.jsx)("br",{}),"San Francisco, CA 94111",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"tel:+4155284444",children:"415.528.4444"})]}),Object(O.jsx)("p",{style:{marginTop:"0.5em",marginBottom:"1rem"},children:Object(O.jsx)("a",{href:"/about/contact-us",children:"Contact Us"})})]}),Object(O.jsxs)("ul",{class:"footer-menu",children:[Object(O.jsx)("li",{class:"first leaf",children:Object(O.jsx)("a",{href:"/visit",title:"",children:"Plan Your Visit"})}),Object(O.jsx)("li",{class:"collapsed",children:Object(O.jsx)("a",{href:"/visit/calendar",title:"",children:"Calendar"})}),Object(O.jsx)("li",{class:"leaf",children:Object(O.jsx)("a",{href:"https://transact.exploratorium.edu/ticketing/ticketing.aspx",title:"",children:"Reserve Tickets"})}),Object(O.jsx)("li",{class:"leaf",children:Object(O.jsx)("a",{href:"/visit/location-directions",title:"",children:"Getting Here"})}),Object(O.jsx)("li",{class:"leaf",children:Object(O.jsx)("a",{href:"/visit/store",title:"",children:"Store"})}),Object(O.jsx)("li",{class:"last leaf",children:Object(O.jsx)("a",{href:"/visit/rentals",title:"",children:"Event Rentals"})})]}),Object(O.jsxs)("ul",{class:"footer-menu",children:[Object(O.jsx)("li",{class:"first leaf",children:Object(O.jsx)("a",{href:"/about-us",title:"",children:"About Us"})}),Object(O.jsx)("li",{class:"leaf",children:Object(O.jsx)("a",{href:"/membership",title:"",children:"Become a Member"})}),Object(O.jsx)("li",{class:"leaf",children:Object(O.jsx)("a",{href:"/support/donate-today",title:"",children:"Donate"})}),Object(O.jsx)("li",{class:"leaf",children:Object(O.jsx)("a",{href:"/about/jobs",title:"",children:"Jobs"})}),Object(O.jsx)("li",{class:"leaf",children:Object(O.jsx)("a",{href:"/support/volunteer",title:"",children:"Volunteer"})}),Object(O.jsx)("li",{class:"last leaf",children:Object(O.jsx)("a",{href:"/press-office",title:"",children:"Press Office"})})]})]})]}),Object(O.jsxs)("div",{className:"right-grid",children:[Object(O.jsxs)("div",{className:"footer-links",children:[Object(O.jsx)("div",{className:"grid-33 grid-parent",children:Object(O.jsx)(j.Button,{children:"Visit"})}),Object(O.jsx)("div",{className:"grid-33 grid-parent",children:Object(O.jsx)(j.Button,{children:"Join"})}),Object(O.jsx)("div",{className:"grid-33 grid-parent",children:Object(O.jsx)(j.Button,{children:"Give"})})]}),Object(O.jsxs)("div",{className:"footer-email-block",children:[Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:"/about/newsletters",children:"Get at-home activities and learning tools delivered straight to your inbox"})}),Object(O.jsx)("form",{children:Object(O.jsx)("input",{type:"textbox"})}),Object(O.jsxs)("p",{class:"small",children:[" The Exploratorium is a 501(c)(3) nonprofit organization. Our tax ID #: 94-1696494",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"/about/use-policy",children:"\xa9 2021 Exploratorium"})," |",Object(O.jsx)("a",{href:"/about/use-policy",children:"Terms of Service"})," |",Object(O.jsx)("a",{href:"/about/privacy-policy",children:"Privacy Policy"})," |",Object(O.jsx)("a",{href:"/about/privacy-policy#california",children:"Your California Privacy Rights"})," |",Object(O.jsxs)("span",{id:"teconsent",style:{display:"inline-block"},"aria-label":"Open Cookie Preferences Modal",consent:"undefined",role:"complementary",children:[Object(O.jsx)("script",{src:"https://consent.trustarc.com/asset/notice.js/v/v1.7-8834",async:"async",crossorigin:""}),Object(O.jsxs)("a",{role:"link",id:"icon-id06220164648665103",tabindex:"0",lang:"en","aria-label":'<u>Cookie Preferences</u> <img src="https://www.exploratorium.edu/sites/default/files/truste-logo/truste_logo_small.png" style="position:absolute; padding: 0px 5px">',style:{cursor:"pointer"},children:[Object(O.jsx)("u",{children:"Cookie Preferences"})," ",Object(O.jsx)("img",{src:"https://www.exploratorium.edu/sites/default/files/truste-logo/truste_logo_small.png",style:{position:"absolute",padding:"0px 5px"}})]}),Object(O.jsx)("script",{src:"https://consent.trustarc.com/notice?domain=exploratorium.edu&country=us&js=nj2&c=teconsent&text=true",async:"async",crossorigin:""})]})]})]})]})]})}),z=function(){return Object(O.jsx)(c.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(j.Callout,{color:j.Colors.SUCCESS,children:Object(O.jsxs)("p",{children:["Now Open! Plan your visit ",Object(O.jsx)("i",{className:"fas fa-arrow-right","aria-hidden":"true",children:"\xa0"})]})}),Object(O.jsx)(v,{}),Object(O.jsx)(W,{}),Object(O.jsx)(Y,{})]})})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,69)).then((function(t){var s=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,n=t.getTTFB;s(e),r(e),i(e),o(e),n(e)}))};s(67);n.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(c.b,{children:Object(O.jsx)(z,{})})}),document.getElementById("root")),V()}},[[68,1,2]]]);
//# sourceMappingURL=main.d4a6fb4e.chunk.js.map