"use strict";(self.webpackChunkhassan_website=self.webpackChunkhassan_website||[]).push([[1088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,c=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?a.createElement(c,s(s({ref:t},p),{},{components:n})):a.createElement(c,s({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4},s="Basic Enum, Info Gathering & Vulnerability Assessment",o={unversionedId:"CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment",id:"CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment",title:"Basic Enum, Info Gathering & Vulnerability Assessment",description:"What & Why Information Gathering",source:"@site/docs/CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment.md",sourceDirName:"CyberSecurity/CyberrSecurity360",slug:"/CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment",permalink:"/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Basic Enum, Info Gathering & Vulnerability Assessment",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Networking !",permalink:"/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Networking"},next:{title:"Foot Printing And More..",permalink:"/cybersecurity/docs/CyberSecurity/CyberrSecurity360/Foot Printing and More.."}},l={},m=[{value:"<strong>What &amp; Why Information Gathering</strong>",id:"what--why-information-gathering",level:2},{value:"<strong><em>Assets Discovery</em></strong>",id:"assets-discovery",level:2},{value:"<strong><em>What Is Assets Discovery ?</em></strong>",id:"what-is-assets-discovery-",level:3},{value:"<strong>Enumeration</strong>",id:"enumeration",level:2},{value:"<strong>Domain</strong>",id:"domain",level:3},{value:"<strong>Types of Domain</strong>",id:"types-of-domain",level:3},{value:"<strong>Horizontal Enumeration</strong>",id:"horizontal-enumeration",level:3},{value:"<strong><em>Vertical Enumeration</em></strong>",id:"vertical-enumeration",level:3},{value:"<strong><em>Passive Information gathering</em></strong>.",id:"passive-information-gathering",level:2},{value:"<strong>What is subdomain enumeration?</strong>",id:"what-is-subdomain-enumeration",level:3},{value:"<strong>FQND</strong>",id:"fqnd",level:3},{value:"<strong><em>Information gathering of Subdomains.</em></strong>",id:"information-gathering-of-subdomains",level:2},{value:"<strong><em>Censys Search</em></strong>:",id:"censys-search",level:3},{value:"<strong><em>RapidDNS:</em></strong>",id:"rapiddns",level:3},{value:"<strong><em>Crt sh</em></strong>",id:"crt-sh",level:3},{value:"<strong><em>Amass</em></strong>",id:"amass",level:3},{value:"<strong>Amass enumeration</strong>",id:"amass-enumeration",level:3},{value:"<strong><em>Hunting Subdomains</em></strong>",id:"hunting-subdomains",level:3},{value:"<strong><em>Subfinder</em></strong>",id:"subfinder",level:3},{value:"<strong><em>Haveibeenpwned:</em></strong>",id:"haveibeenpwned",level:3},{value:"<strong><em>Vulnerability Identification</em></strong>",id:"vulnerability-identification",level:2},{value:"<strong>API</strong>",id:"api",level:3},{value:"<strong>Shodan</strong> :",id:"shodan-",level:3},{value:"CLI",id:"cli",level:4},{value:"GUI",id:"gui",level:4},{value:"<strong><em>Fullhunt</em></strong>",id:"fullhunt",level:3},{value:"<strong><em>Zoomeye</em></strong>",id:"zoomeye",level:3},{value:"Finding The Pices",id:"finding-the-pices",level:2}],p={toc:m},u="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-enum-info-gathering--vulnerability-assessment"},"Basic Enum, Info Gathering & Vulnerability Assessment"),(0,i.kt)("h2",{id:"what--why-information-gathering"},(0,i.kt)("strong",{parentName:"h2"},"What & Why Information Gathering")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Information Gathering means collecting the information for whatever means necessary.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is a crucial phase in Hacking... Information helps the tester to know about the entities and fascilable planning to test the security.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The information mostly gathers form websites for the entities")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"assets-discovery"},(0,i.kt)("strong",{parentName:"h2"},(0,i.kt)("em",{parentName:"strong"},"Assets Discovery"))),(0,i.kt)("h3",{id:"what-is-assets-discovery-"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"What Is Assets Discovery ?"))),(0,i.kt)("p",null,"As a person will be the target then collect information of target with the people the target meet. The victim asset means what is has an assets."),(0,i.kt)("p",null,"It makes the attack path increased."),(0,i.kt)("h2",{id:"enumeration"},(0,i.kt)("strong",{parentName:"h2"},"Enumeration")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After validation when the information is dug up is called enumerations")),(0,i.kt)("h3",{id:"domain"},(0,i.kt)("strong",{parentName:"h3"},"Domain")),(0,i.kt)("p",null,"A domain name is a unique address for a website that can be acquired. Usually, it consists of a website name and a domain name extension."),(0,i.kt)("h3",{id:"types-of-domain"},(0,i.kt)("strong",{parentName:"h3"},"Types of Domain")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Horizontal Domain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Vertical Domain"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Domain-vertical-horizotal",src:n(4339).Z,width:"862",height:"498"})))),(0,i.kt)("h3",{id:"horizontal-enumeration"},(0,i.kt)("strong",{parentName:"h3"},"Horizontal Enumeration")),(0,i.kt)("p",null,"During a security assessment, our main aim is to find and list all the main websites owned by a single entity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Crunchbase")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"crunchbase",src:n(2220).Z,width:"801",height:"452"})),(0,i.kt)("h3",{id:"vertical-enumeration"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Vertical Enumeration"))),(0,i.kt)("p",null,"Vertical enumeration, or vertical domain correlation, is the process of discovering and connecting related websites that belong to the same organization or entity."),(0,i.kt)("p",null,"Vertical Enumeration can be performed with the help of below methods. Which is"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"passive-information-gathering"},(0,i.kt)("strong",{parentName:"h2"},(0,i.kt)("em",{parentName:"strong"},"Passive Information gathering")),"."),(0,i.kt)("p",null,"Passive information gathering is based on ",(0,i.kt)("strong",{parentName:"p"},"other with whatever is asked")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Don\u2019t trust the passive information because it is available to others for some logical reasons.")),(0,i.kt)("h3",{id:"what-is-subdomain-enumeration"},(0,i.kt)("strong",{parentName:"h3"},"What is subdomain enumeration?")),(0,i.kt)("p",null,"Subdomain enumeration is a crucial step in understanding the structure of a website. It involves finding and identifying smaller sections within a larger website. To put it simply, it's like exploring different sections or pages that are part of a main website. ",(0,i.kt)("strong",{parentName:"p"},"Subdomain Enumeration")," is a process of finding sub-domains associated to the root domain. According to ",(0,i.kt)("code",null,"RFC 1034"),', "a domain is a subdomain of another domain if it is contained within that domain".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"understanding-level-of-domain",src:n(1785).Z,width:"822",height:"218"})),(0,i.kt)("h3",{id:"fqnd"},(0,i.kt)("strong",{parentName:"h3"},"FQND")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Fully Qualified Domain Name (",(0,i.kt)("strong",{parentName:"p"},"FQDN"),") is the complete domain name for a specific computer, or host, on the internet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An FQDN looks like this: -"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"myhost.example.com. ",(0,i.kt)("strong",{parentName:"p"},"----\x3e")," Fully Qualified Domain Name\nmyhost ",(0,i.kt)("strong",{parentName:"p"},"----\x3e")," is the host located within the domain example.com (subdomain)")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"information-gathering-of-subdomains"},(0,i.kt)("strong",{parentName:"h2"},(0,i.kt)("em",{parentName:"strong"},"Information gathering of Subdomains."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"whois lookup"),": help to gather the information based on ",(0,i.kt)("strong",{parentName:"p"},"domain"),"."),(0,i.kt)("p",null,"How the ",(0,i.kt)("strong",{parentName:"p"},"whois")," get the information of Domian because when the target Regester with domain vendors it must provide some information/details to authority. And they will available this information public as they use this method of advertisement unless and until buy the premium subscription"),(0,i.kt)("p",null,"Register ",(0,i.kt)("strong",{parentName:"p"},"whois")," server is where the whois get the information of domain."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Syntax: whois")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Cmd"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#whois <name><.in><.com><.etc>\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xa0 \xa0 \xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"\xa0")))),(0,i.kt)("p",null,"|The premium subscription: REDACTED FOR PRIVACY \xa0 \xa0 \xa0 \xa0 |The premium non-subscription gets the information marketing also: GoDaddy sell domain|"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"different-between-paid&amp;unpaid",src:n(8463).Z,width:"1058",height:"408"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xa0",(0,i.kt)("em",{parentName:"li"},"Use various information from this ",(0,i.kt)("strong",{parentName:"em"},"Updated Date")," and try to buy before the original target did."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"\xa0")))),(0,i.kt)("p",null,"|This is Known as Security Plan.|This is not a Security Plan.|"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Different-bw-securitnonsecurit-plain",src:n(7550).Z,width:"1057",height:"434"})," "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Try to Find the information which can be reuse for further Gathering."))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"censys-search"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Censys Search")),":"),(0,i.kt)("p",null,"Censys Search is a search engine that helps you find and understand information about devices and networks connected to the internet, revealing security issues and other important details."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Home page:")," ",(0,i.kt)("a",{parentName:"p",href:"https://search.censys.io/"},(0,i.kt)("strong",{parentName:"a"},"https://search.censys.io/"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Census-home-page",src:n(9600).Z,width:"1056",height:"513"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"sometimes censys found and sometimes it's doesn't")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"censys-ip-name-search",src:n(6531).Z,width:"923",height:"820"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Try to Explore more like this :")))),(0,i.kt)("p",null,"\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"this indicate that the target use vpn for palo alto vendous which is global protect. Got the Algorithum Details and try to decrepted ."))),(0,i.kt)("p",null,"\xa0 \xa0 ",(0,i.kt)("img",{alt:"censys-search-pa",src:n(9188).Z,width:"735",height:"695"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"How does censys know get these details"))," ?\xa0\n\xa0 \xa0 - ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Using the certificate.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Censys-search-certi",src:n(1488).Z,width:"734",height:"680"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rapiddns"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"RapidDNS:"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Home: ",(0,i.kt)("a",{parentName:"strong",href:"https://rapiddns.io/"},"https://rapiddns.io/"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It Will Give Information about DNS Records of targets")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"crt-sh"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Crt sh"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It searches through the certificate fingerprint and domain name")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cet-sh-results",src:n(6770).Z,width:"747",height:"716"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These three certs might be belonged to netplace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The operator of the certificate is google and Cloudflare"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"amass"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Amass"))),(0,i.kt)("p",null,"To install run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt install amass\n")),(0,i.kt)("p",null,"Discovery target for enumeration"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Syntax"),": >>"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"amas intel \u2013org\n")),(0,i.kt)("h3",{id:"amass-enumeration"},(0,i.kt)("strong",{parentName:"h3"},"Amass enumeration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"amass enum \u2013d [domain-name]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"amass enum \u2013passive \u2013d [domain-name] -src\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hunting-subdomains"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Hunting Subdomains"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sublist3r\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Syntax: sublist3r \u2013d [domain-name]_\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subfinder"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Subfinder"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"d - Specify our target domain\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"subfinder-results",src:n(7011).Z,width:"998",height:"451"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"haveibeenpwned"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Haveibeenpwned:"))),(0,i.kt)("p",null,"This tool is used to determine if an email has previously been compromised. Like whois works it collects from the leaks and breaches."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"vulnerability-identification"},(0,i.kt)("strong",{parentName:"h2"},(0,i.kt)("em",{parentName:"strong"},"Vulnerability Identification"))),(0,i.kt)("h3",{id:"api"},(0,i.kt)("strong",{parentName:"h3"},"API")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A software can be anything, any game, any application.")),(0,i.kt)("p",null,"The same software is hosted on an IP address and port (server concept because it is served) , but an additional feature is authentication. If someone wants to connect to this software, they need to authenticate using a username and password. A similar concept applies to APIs, where instead of authentication with a username and password, it is replaced with a token-based value. Whoever has the token value can access this particular software.  "),(0,i.kt)("h3",{id:"shodan-"},(0,i.kt)("strong",{parentName:"h3"},"Shodan")," :"),(0,i.kt)("p",null,"What is shodan ? : - Shodan is a database\nWhich database ? : - IOT database  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shodan is a database of IOT and it host it over http/https and communicate over that and if we need to access the shodan need authentication which is token based")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"API will proved an interface which delivery this type of services and interact")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"And the API is the authentication Token. Which help to interact which shodan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shodan is a search engine used to search for any device that is connected to the internet. Commonly used to search for IoT devices like cameras, raspberry-pi's, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shodan: It has GUI (",(0,i.kt)("a",{parentName:"p",href:"https://shodan.io"},"https://shodan.io"),") as well as CLI, shodan says that it has information but it can be wrong or have very less information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It collects information on backend to make the world secure and cybersecurity. So, kind of vulnerability assessment\n",(0,i.kt)("img",{alt:"shodan-filter-map",src:n(3428).Z,width:"999",height:"545"})))),(0,i.kt)("h4",{id:"cli"},"CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"shodan\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the API to Shodan from the account")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"shodan init <api-key>\n")),(0,i.kt)("h4",{id:"gui"},"GUI"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"shodan-gui-netplace-results",src:n(5380).Z,width:"746",height:"525"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Shodan Information can be False Positive")),(0,i.kt)("h3",{id:"fullhunt"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Fullhunt"))),(0,i.kt)("p",null,"its similar like shodan ."),(0,i.kt)("p",null,"Home: ",(0,i.kt)("a",{parentName:"p",href:"https://fullhunt.io"},"https://fullhunt.io")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It gives some information like shodan")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Intelligence X"))),(0,i.kt)("p",null,"\xa0home: ",(0,i.kt)("a",{parentName:"p",href:"https://intelx.io/"},"https://intelx.io/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xa0",(0,i.kt)("strong",{parentName:"p"},"intelligence")," ",(0,i.kt)("strong",{parentName:"p"},"X")," ",(0,i.kt)("strong",{parentName:"p"},"is")," a search engine and data archive. Search the public web by email, domain, IP, CIDR, Bitcoin address and more.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It has the GUI and CLI as very"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Intex.py\n")),(0,i.kt)("h3",{id:"zoomeye"},(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("em",{parentName:"strong"},"Zoomeye"))),(0,i.kt)("p",null,"Home: zoomeye.org"),(0,i.kt)("h2",{id:"finding-the-pices"},"Finding The Pices"))}h.isMDXComponent=!0},4339:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Vertical&HorizontalDomain-40f9e896b56c5099bbe12244152ac6dc.png"},6531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/census-ip-name-search-268a69d6d69052bad66ee0da90d8a30f.png"},1488:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/censys-search-certi-a4fc077bcc2e31432c5007ab79c2e0c8.png"},9188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/censys-search-pa-5ea4071c74912a0b0fc2c55fcf8a279b.png"},9600:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/censyshomepage-0d6c2a8b257d49acd5aa18295bc7a1e5.png"},6770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/crtsh-results-4c98f4251061255d970b980439f06a96.png"},2220:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/crunchbase-7fb7d6396122e77d87db544c9b710bac.png"},8463:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/different-between-paid-unpaid-a9ecbadd7d0c869580929d1c0f201873.png"},7550:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/different-between-security-nonsecurityplan-30119be364ee58b4fb76ef895af581b3.png"},3428:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shodan-filter-cli-map-5ca5c9004fe09123684b589c63ddcbc7.png"},5380:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shodan-gui-netplace-results-1dca228eef76680faaa343d655e54176.png"},7011:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/subfinder-results-f57d84f06d67fdfff2e38c33b5ef8e1d.png"},1785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/understandinglevelofdomain-9cc6c6fbbf4bfc1e1595fc95f95d84c8.png"}}]);