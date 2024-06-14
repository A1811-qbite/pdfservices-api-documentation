"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1706],{99917:function(e,s,t){t.r(s),t.d(s,{_frontmatter:function(){return l},default:function(){return c}});var n=t(87462),a=t(45987),r=(t(15007),t(64983)),o=t(91515);const d=["components"],l={},i=(p="CodeBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var p;const u={_frontmatter:l},m=o.Z;function c(e){let{components:s}=e,t=(0,a.Z)(e,d);return(0,r.mdx)(m,(0,n.Z)({},u,t,{components:s,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"sdk-utilities"},"SDK Utilities"),(0,r.mdx)("p",null,"This page covers various utilities provided by the Adobe PDF Services SDKs, including operations such as refreshing\ndownload URIs, deleting assets, and streamline your workflows."),(0,r.mdx)("h2",{id:"important-note-on-expiry"},"Important Note on Expiry"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Asset Expiry : Assets uploaded to Adobe internal storage are transiently stored for 24 hours.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Pre-signed URI Expiry : The pre-signed URI provided for uploading or downloading the content has an expiry of 1 hour."))),(0,r.mdx)("p",null,"See our public API Reference for assets ",(0,r.mdx)("a",{parentName:"p",href:"../../../apis/#tag/Assets"},"here"),"."),(0,r.mdx)("h2",{id:"refresh-download-uri"},"Refresh Download URI"),(0,r.mdx)("p",null,"This function will create a new download URI for your asset. This is useful for scenarios where the asset needs to be\ndownloaded after its URI has expired."),(0,r.mdx)(i,{slots:"heading, code",repeat:"3",languages:"Java, Node.js, Python",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"CreatePDFResult result = pdfServicesResponse.getResult();\nAsset asset = result.getAsset();\n\n// refresh the download URI in case it expires or is null for the uploaded asset\nAsset refreshedAsset = pdfServices.refreshDownloadURI(asset);\n")),(0,r.mdx)("h3",{id:"nodejs"},"Node.js"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const result = pdfServicesResponse.result;\nconst asset = result.asset;\n\n// refresh the download URI in case it expires or is null for the uploaded asset\nconst refreshedAsset = await pdfServices.refreshDownloadURI({asset});\n")),(0,r.mdx)("h3",{id:"python"},"Python"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"result = pdf_services_response.getResult()\nasset = result.getAsset()\n\n# refresh the download URI in case it expires or is null for the uploaded asset\nrefreshed_asset = pdf_services.refreshDownloadURI(asset);\n")),(0,r.mdx)("h2",{id:"delete-asset"},"Delete Asset"),(0,r.mdx)("p",null,"This function deletes an asset from Adobe internal storage. If you prefer not to store your asset on Adobe's storage,\nwhere assets are transiently stored for 24 hours, you can use this function to delete the asset immediately."),(0,r.mdx)(i,{slots:"heading, code",repeat:"3",languages:"Java, Node.js, Python",mdxType:"CodeBlock"}),(0,r.mdx)("h3",{id:"java-1"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"CreatePDFResult result = pdfServicesResponse.getResult();\nAsset asset = result.getAsset();\n \n// delete asset\npdfServices.deleteAsset(asset);\n")),(0,r.mdx)("h3",{id:"nodejs-1"},"Node.js"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const result = pdfServicesResponse.result;\nconst asset = result.asset;\n\n// delete asset\nawait pdfServices.deleteAsset({asset});\n")),(0,r.mdx)("h3",{id:"python-1"},"Python"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"create_pdf_result = pdf_services_response.getResult()\noutput_asset = create_pdf_result.getAsset()        \n\n# delete asset\npdf_services.deleteAsset(output_asset);\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-howtos-sdk-utilities-md-fd0a604783d9d3fcda47.js.map