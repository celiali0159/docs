"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4713],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4324:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",sidebar_position:50,slug:"/use"},p="\u5982\u4f55\u8fde\u63a5\u60a8\u7684\u8bbe\u5907",s={unversionedId:"getting_started/how_to_access_device",id:"getting_started/how_to_access_device",isDocsHomePage:!1,title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",description:"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a",source:"@site/docs/getting_started/how_to_access_device.md",sourceDirName:"getting_started",slug:"/use",permalink:"/docs/use",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/getting_started/how_to_access_device.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",sidebar_position:50,slug:"/use"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd",permalink:"/docs/getting_started/how-to-use-plugin"},next:{title:"Don't repeat yourself",permalink:"/docs/developer_cookbook/tools/do_not_repeat_youself"}},c=[{value:"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a",id:"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206",children:[],level:3},{value:"\u5728tkeel\u5e73\u53f0\u5b89\u88c5\u63d2\u4ef6",id:"\u5728tkeel\u5e73\u53f0\u5b89\u88c5\u63d2\u4ef6",children:[{value:"Step 1 : \u5b89\u88c5\u7528\u4e8e\u8fde\u63a5\u8bbe\u5907\u7684\u63d2\u4ef6\uff1aiothub",id:"step-1--\u5b89\u88c5\u7528\u4e8e\u8fde\u63a5\u8bbe\u5907\u7684\u63d2\u4ef6iothub",children:[],level:3},{value:"Step 2 : \u5b89\u88c5\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u7684\u63d2\u4ef6: device",id:"step-2--\u5b89\u88c5\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u7684\u63d2\u4ef6-device",children:[],level:3}],level:2},{value:"\u5728tkeel\u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907",id:"\u5728tkeel\u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907",children:[{value:"Step 1\uff1a \u5728 tkeel \u5e73\u53f0\u7533\u8bf7\u7528\u6237 token",id:"step-1-\u5728-tkeel-\u5e73\u53f0\u7533\u8bf7\u7528\u6237-token",children:[{value:"1. \u5728\u7ba1\u7406\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u79df\u6237&amp;\u79df\u6237\u7ba1\u7406\u5458",id:"1-\u5728\u7ba1\u7406\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u79df\u6237\u79df\u6237\u7ba1\u7406\u5458",children:[],level:4},{value:"2. \u5229\u7528\u79df\u6237&amp;\u79df\u6237\u7ba1\u7406\u5458\u5206\u914d\u7528\u6237(\u7ba1\u7406\u5458) Token",id:"2-\u5229\u7528\u79df\u6237\u79df\u6237\u7ba1\u7406\u5458\u5206\u914d\u7528\u6237\u7ba1\u7406\u5458-token",children:[],level:4}],level:3},{value:"Step 2\uff1a \u5728 tkeel \u5e73\u53f0\u6ce8\u518c\u6570\u5b57\u5316\u8bbe\u5907",id:"step-2-\u5728-tkeel-\u5e73\u53f0\u6ce8\u518c\u6570\u5b57\u5316\u8bbe\u5907",children:[{value:"1. \u521b\u5efa\u8bbe\u5907",id:"1-\u521b\u5efa\u8bbe\u5907",children:[],level:4},{value:"2. \u521b\u5efa\u8bbe\u5907\u7ec4\uff08\u53ef\u9009\uff09",id:"2-\u521b\u5efa\u8bbe\u5907\u7ec4\u53ef\u9009",children:[],level:4},{value:"3. \u6dfb\u52a0\u8bbe\u5907\u8fdb\u8bbe\u5907\u7ec4\u5206\u7c7b\uff08\u53ef\u9009\uff09",id:"3-\u6dfb\u52a0\u8bbe\u5907\u8fdb\u8bbe\u5907\u7ec4\u5206\u7c7b\u53ef\u9009",children:[],level:4},{value:"4. \u67e5\u770b\u8bbe\u5907\u5b9a\u4e49\u8be6\u60c5",id:"4-\u67e5\u770b\u8bbe\u5907\u5b9a\u4e49\u8be6\u60c5",children:[],level:4}],level:3}],level:2},{value:"\u53d1\u9001\u6570\u636e\u5230 tkeel \u5e73\u53f0",id:"\u53d1\u9001\u6570\u636e\u5230-tkeel-\u5e73\u53f0",children:[{value:"Step 1 \uff1a \u9009\u62e9\u8fde\u63a5\u534f\u8bae\u548c\u65b9\u5f0f\u53d1\u9001\u6570\u636e",id:"step-1--\u9009\u62e9\u8fde\u63a5\u534f\u8bae\u548c\u65b9\u5f0f\u53d1\u9001\u6570\u636e",children:[{value:"MQTT \u8fde\u63a5\uff1a",id:"mqtt-\u8fde\u63a5",children:[],level:4},{value:"HTTP \u8fde\u63a5\uff1a",id:"http-\u8fde\u63a5",children:[],level:4},{value:"COAP \u8fde\u63a5\uff1a",id:"coap-\u8fde\u63a5",children:[],level:4}],level:3},{value:"Step 2 \uff1a \u4ece tkeel\u5e73\u53f0 \u83b7\u53d6\u8bbe\u5907\u6570\u636e",id:"step-2--\u4ece-tkeel\u5e73\u53f0-\u83b7\u53d6\u8bbe\u5907\u6570\u636e",children:[{value:"\u67e5\u8be2\uff1a",id:"\u67e5\u8be2",children:[],level:4},{value:"\u8ba2\u9605\uff1a",id:"\u8ba2\u9605",children:[],level:4}],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5982\u4f55\u8fde\u63a5\u60a8\u7684\u8bbe\u5907"},"\u5982\u4f55\u8fde\u63a5\u60a8\u7684\u8bbe\u5907"),(0,l.kt)("h3",{id:"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206"},"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 tkeel \u5e73\u53f0\u5b89\u88c5\u8fde\u63a5\u8bbe\u5907\u4f9d\u8d56\u63d2\u4ef6\uff1a1\u3001iothub, 2\u3001device"),(0,l.kt)("li",{parentName:"ol"},"\u5229\u7528 device \u63d2\u4ef6\u5728 tkeel \u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ol"},"\u5229\u7528 iothub \u63d2\u4ef6\u53d1\u9001\u6570\u636e\u81f3tkeel\u5e73\u53f0")),(0,l.kt)("h2",{id:"\u5728tkeel\u5e73\u53f0\u5b89\u88c5\u63d2\u4ef6"},"\u5728tkeel\u5e73\u53f0\u5b89\u88c5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u8fde\u63a5\u60a8\u7684\u8bbe\u5907\u9700\u8981\u5e73\u53f0\u4e2d\u5b89\u88c5\u5982\u4e0b2\u4e2a\u63d2\u4ef6\u6a21\u5757\uff1a"),(0,l.kt)("h3",{id:"step-1--\u5b89\u88c5\u7528\u4e8e\u8fde\u63a5\u8bbe\u5907\u7684\u63d2\u4ef6iothub"},"Step 1 : \u5b89\u88c5\u7528\u4e8e\u8fde\u63a5\u8bbe\u5907\u7684\u63d2\u4ef6\uff1aiothub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin install https://tkeel-io.github.io/helm-charts/tkeel-iothub@v0.2.0 tkeel-iothub\n")),(0,l.kt)("h3",{id:"step-2--\u5b89\u88c5\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u7684\u63d2\u4ef6-device"},"Step 2 : \u5b89\u88c5\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u7684\u63d2\u4ef6: device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin install https://tkeel-io.github.io/helm-charts/tkeel-device@v0.2.0 tkeel-device\n")),(0,l.kt)("h2",{id:"\u5728tkeel\u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907"},"\u5728tkeel\u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907"),(0,l.kt)("h3",{id:"step-1-\u5728-tkeel-\u5e73\u53f0\u7533\u8bf7\u7528\u6237-token"},"Step 1\uff1a \u5728 tkeel \u5e73\u53f0\u7533\u8bf7\u7528\u6237 token"),(0,l.kt)("h4",{id:"1-\u5728\u7ba1\u7406\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u79df\u6237\u79df\u6237\u7ba1\u7406\u5458"},"1. \u5728\u7ba1\u7406\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u79df\u6237&\u79df\u6237\u7ba1\u7406\u5458"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'http://192.168.123.12:30777/v1/tenants\' \\\n -H \'Content-Type: application/json\' \\\n -d \'{\n    "title":"TenantDemo",\n    "remark":"this is demo tenant",\n    "admin":{"username":"demoadmin","password":"123456"}\n}\'\n \n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"expected result ")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 0,\n    "msg": "ok",\n    "data": {\n        "tenant_id": 6,\n        "title": "TenantDemo",\n        "remark": "this is demo tenant",\n        "admin": {\n            "tenant_id": 6,\n            "username": "demoadmin",\n            "password": "",\n            "nick_name": "",\n            "avatar": "",\n            "email": ""\n        }\n    }\n}\n')),(0,l.kt)("h4",{id:"2-\u5229\u7528\u79df\u6237\u79df\u6237\u7ba1\u7406\u5458\u5206\u914d\u7528\u6237\u7ba1\u7406\u5458-token"},"2. \u5229\u7528\u79df\u6237&\u79df\u6237\u7ba1\u7406\u5458\u5206\u914d\u7528\u6237(\u7ba1\u7406\u5458) Token"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'http://192.168.123.11:30707/apis/security/v1/oauth/token?grant_type=password&username=6-demoadmin&password=123456'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"expected result")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 0,\n    "msg": "ok",\n    "data": {\n        "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDE4NzY0MTksInN1YiI6InVzci02LWJmMTdkZTU4ZTgwNGYyODkxY2ZjZDFkMjM1M2RlYzgyIn0.B4WbYKr4kbAyEIKpXDPSYdicL-irl1bzJwWXPDltytrCuIGwlgWiByaglwWnJi7lwbYznhLku4yYQiwq4dHQRw",\n        "expires_in": 3600000,\n        "refresh_token": "NJK3NWQ1MJETMWQYYI01NZI2LTK0YZITNMM2MJLLZTGWZTM4",\n        "token_type": "Bearer"\n    }\n}\n')),(0,l.kt)("h3",{id:"step-2-\u5728-tkeel-\u5e73\u53f0\u6ce8\u518c\u6570\u5b57\u5316\u8bbe\u5907"},"Step 2\uff1a \u5728 tkeel \u5e73\u53f0\u6ce8\u518c\u6570\u5b57\u5316\u8bbe\u5907"),(0,l.kt)("p",null,"step 1\u83b7\u53d6\u7528\u6237 ",(0,l.kt)("strong",{parentName:"p"},"access_token")," \u540e\uff0c\u8bf7\u6c42\u5f00\u653e\u63a5\u53e3\u65f6\u5c06 ",(0,l.kt)("strong",{parentName:"p"},"access_token")," \u6dfb\u52a0\u5728\u8bf7\u6c42\u5934\uff0c\u683c\u5f0f\uff1a"),(0,l.kt)("p",null,"Authorization\uff1aBearer ",(0,l.kt)("strong",{parentName:"p"},"access_token")),(0,l.kt)("h4",{id:"1-\u521b\u5efa\u8bbe\u5907"},"1. \u521b\u5efa\u8bbe\u5907"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'127.0.0.1:31234/v1/devices\' \\\n--header \'Authorization: Bearer <\u5206\u914d\u7684\u7528\u6237result \u201caccess_token\u201d\u5b57\u6bb5> \'\\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name":"dev_name",\n    "desc":"dev_desc",\n    "group":"default",\n    "ext":{\n        "version":"1.1",\n        "other":"other"\n    }\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"expected result")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"dev":{"name":"dev_name","desc":"dev_desc","group":"default","ext":{"other":"other","version":"1.1"}},"sysField":{"_id":"f2dbf4a9-bc0b-4dc4-9a3c-aac568e81cd3","_createdAt":1638347417928116200,"_updatedAt":1638347417928116200,"_enable":true,"_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiJmMmRiZjRhOS1iYzBiLTRkYzQtOWEzYy1hYWM1NjhlODFjZDMiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY2OTg4MzQxNywib3duZXIiOiJ1c3ItNC05YTRkZjljZTYwNGU4MDQ0ZmZmMGQzNjE1Mzk0NzQ1ZiJ9.L9o4ixGnqQqFAuEkqkjfxmAUUovammgQm8iKPVQhjBavpv9SF3xuWohvNNij5TFXeO_ejHOGm8vfLebKgcyX3g"}}\n')),(0,l.kt)("h4",{id:"2-\u521b\u5efa\u8bbe\u5907\u7ec4\u53ef\u9009"},"2. \u521b\u5efa\u8bbe\u5907\u7ec4\uff08\u53ef\u9009\uff09"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'127.0.0.1:31234/v1/groups\' \\\n--header \'Authorization: Bearer <\u5206\u914d\u7684\u7528\u6237result \u201caccess_token\u201d\u5b57\u6bb5>\\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name":"group_name",\n    "desc":"group desc",\n    "parent":"root",\n    "ext":{\n        "classify":"abc",\n        "other":"ohter"\n    }\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"expected result")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"result":"ok","entityInfo":{"group":{"name":"group_name","desc":"group desc","parent":"root","ext":{"classify":"abc","other":"ohter"}},"subIds":{},"sysField":{"_id":"c175a35e-4171-4bf0-b53b-8d05caf2e394","_createdAt":1638348873147219200,"_updatedAt":1638348873147219500}}}\n')),(0,l.kt)("h4",{id:"3-\u6dfb\u52a0\u8bbe\u5907\u8fdb\u8bbe\u5907\u7ec4\u5206\u7c7b\u53ef\u9009"},"3. \u6dfb\u52a0\u8bbe\u5907\u8fdb\u8bbe\u5907\u7ec4\u5206\u7c7b\uff08\u53ef\u9009\uff09"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST '127.0.0.1:31234/v1/groups/<\u521b\u5efa\u8bbe\u5907\u7ec4result \u201c_id\u201d \u5b57\u6bb5>/items' \\\n--header 'Authorization: Bearer <\u5206\u914d\u7684\u7528\u6237result \u201caccess_token\u201d\u5b57\u6bb5> '\\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"ids\":[\"<\u521b\u5efa\u8bbe\u5907result \u201c_id\u201d\u5b57\u6bb5 >\"]\n}'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"expected result")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"result":"Ok"}\n')),(0,l.kt)("h4",{id:"4-\u67e5\u770b\u8bbe\u5907\u5b9a\u4e49\u8be6\u60c5"},"4. \u67e5\u770b\u8bbe\u5907\u5b9a\u4e49\u8be6\u60c5"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET '127.0.0.1:31234/v1/devices/<\u521b\u5efa\u8bbe\u5907result \u201c_id\u201d\u5b57\u6bb5>' \\\n--header 'Authorization: Bearer <\u5206\u914d\u7684\u7528\u6237result \u201caccess_token\u201d\u5b57\u6bb5>'\\\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"expected result")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"dev":{"name":"dev_name","desc":"dev_desc","group":"c175a35e-4171-4bf0-b53b-8d05caf2e394","ext":{"other":"other","version":"1.1"}},"sysField":{"_id":"f2dbf4a9-bc0b-4dc4-9a3c-aac568e81cd3","_createdAt":1638347417928116200,"_updatedAt":1638347417928116200,"_enable":true,"_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiJmMmRiZjRhOS1iYzBiLTRkYzQtOWEzYy1hYWM1NjhlODFjZDMiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY2OTg4MzQxNywib3duZXIiOiJ1c3ItNC05YTRkZjljZTYwNGU4MDQ0ZmZmMGQzNjE1Mzk0NzQ1ZiJ9.L9o4ixGnqQqFAuEkqkjfxmAUUovammgQm8iKPVQhjBavpv9SF3xuWohvNNij5TFXeO_ejHOGm8vfLebKgcyX3g"}}\n')),(0,l.kt)("h2",{id:"\u53d1\u9001\u6570\u636e\u5230-tkeel-\u5e73\u53f0"},"\u53d1\u9001\u6570\u636e\u5230 tkeel \u5e73\u53f0"),(0,l.kt)("h3",{id:"step-1--\u9009\u62e9\u8fde\u63a5\u534f\u8bae\u548c\u65b9\u5f0f\u53d1\u9001\u6570\u636e"},"Step 1 \uff1a \u9009\u62e9\u8fde\u63a5\u534f\u8bae\u548c\u65b9\u5f0f\u53d1\u9001\u6570\u636e"),(0,l.kt)("h4",{id:"mqtt-\u8fde\u63a5"},"MQTT \u8fde\u63a5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mosquitto_pub -h 192.168.123.9 -t system/test/topic -m "{\\"message\\": \\"hello, tkeel\\",\\"value\\":0}" -p 30805 -u "<\u8bbe\u5907owner>" -P "<\u8bbe\u5907token>" -i "<\u8bbe\u5907ID>"\n')),(0,l.kt)("h4",{id:"http-\u8fde\u63a5"},"HTTP \u8fde\u63a5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"todo\n")),(0,l.kt)("h4",{id:"coap-\u8fde\u63a5"},"COAP \u8fde\u63a5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'coap-client -m get -s 1000  "coap://192.168.123.9:30588/mqtt/topic1?c=<\u8bbe\u5907ID>&p=<\u8bbe\u5907token>&u=<\u8bbe\u5907owner>"\n')),(0,l.kt)("h3",{id:"step-2--\u4ece-tkeel\u5e73\u53f0-\u83b7\u53d6\u8bbe\u5907\u6570\u636e"},"Step 2 \uff1a \u4ece tkeel\u5e73\u53f0 \u83b7\u53d6\u8bbe\u5907\u6570\u636e"),(0,l.kt)("h4",{id:"\u67e5\u8be2"},"\u67e5\u8be2\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request GET 'http://192.168.123.9:30707/apis/core/v1/plugins/abc/entities/<\u8bbe\u5907ID>?owner=<\u8bbe\u5907owner>@source=device' \\\n--header 'Authorization: Bearer <\u7528\u6237token>'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"expected result")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "id": "4e901bc2-927b-4d4f-8a0e-25fa32a66ada",\n    "owner": "usr-4-9a4df9ce604e8044fff0d3615394745f",\n    "configs": {},\n    "properties": {\n        "_data_": "MTIzNA==",\n        "message": "hello, tkeel",\n        "msg": "hello3333",\n        "value": 0\n    }\n}\n')),(0,l.kt)("h4",{id:"\u8ba2\u9605"},"\u8ba2\u9605\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"to do\n")))}u.isMDXComponent=!0}}]);