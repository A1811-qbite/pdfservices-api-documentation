"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6351],{21735:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return u}});var n=t(87462),o=t(45987),r=(t(15007),t(64983)),d=t(91515);const i=["components"],l={},s=(p="CodeBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var p;const m={_frontmatter:l},c=d.Z;function u(e){let{components:a}=e,t=(0,o.Z)(e,i);return(0,r.mdx)(c,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"service-region-configuration-for-pdf-services-apis"},"Service Region Configuration for PDF Services APIs"),(0,r.mdx)("h2",{id:"default-configuration"},"Default Configuration"),(0,r.mdx)("p",null,"Adobe PDF Services APIs use ",(0,r.mdx)("inlineCode",{parentName:"p"},"United States")," as a default region to process all the documents.\nOnce you purchase PDF Services API, its APIs can be configured to process the documents in a specified region that is listed below. "),(0,r.mdx)("h2",{id:"service-region-configuration"},"Service Region Configuration"),(0,r.mdx)("p",null,"Currently, PDF Services APIs have support for the following regions :"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Region Code"),(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Hostname"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ue1")),(0,r.mdx)("td",{parentName:"tr",align:null},"United States (default)"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://pdf-services-ue1.adobe.io"},"https://pdf-services-ue1.adobe.io"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ew1")),(0,r.mdx)("td",{parentName:"tr",align:null},"Europe"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://pdf-services-ew1.adobe.io"},"https://pdf-services-ew1.adobe.io"))))),(0,r.mdx)("br",null),(0,r.mdx)("p",null,"For invoking region specific PDF Services API endpoints, hostnames needs to be changed to the following pattern : ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://pdf-services-{regionCode}.adobe.io"),"."),(0,r.mdx)("h3",{id:"assets-api"},"Assets API"),(0,r.mdx)(s,{slots:"heading, code",repeat:"1",languages:"REST API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"rest-api"},"REST API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"curl --location --request POST 'https://pdf-services-ew1.adobe.io/assets' \\\n--header 'X-API-Key: {{Placeholder for client_id}}' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"mediaType\": \"{{Placeholder for mediaType}}\"\n}'\n")),(0,r.mdx)("h3",{id:"create-job-api"},"Create Job API"),(0,r.mdx)(s,{slots:"heading, code",repeat:"1",languages:"REST API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"rest-api-1"},"REST API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"\ncurl --location --request POST 'https://pdf-services-ew1.adobe.io/operation/{Placeholder for operation name}' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--data-raw '{\n    \"assetID\": \"{{Placeholder for asset ID}}\"\n}'\n\n")),(0,r.mdx)("h3",{id:"poll-job-api"},"Poll Job API"),(0,r.mdx)(s,{slots:"heading, code",repeat:"1",languages:"REST API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"rest-api-2"},"REST API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"\ncurl --location --request GET 'https://pdf-services-ew1.adobe.io/operation/{Placeholder for operation name}' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}'\n'\n")),(0,r.mdx)("p",null,"For a step-by-step guide to use Adobe PDF services APIs, please ",(0,r.mdx)("a",{parentName:"p",href:"./api-usage.md"},"click here"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-howtos-service-region-configuration-for-apis-md-6bf7833e367bfe3e49c2.js.map