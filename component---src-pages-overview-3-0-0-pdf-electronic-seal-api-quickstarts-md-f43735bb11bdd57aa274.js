"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7068],{95809:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return f}});var i,n=t(87462),s=t(63366),p=(t(15007),t(64983)),d=t(91515),r=["components"],o={},c=(i="CodeBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),l={_frontmatter:o},m=d.Z;function f(e){var a=e.components,t=(0,s.Z)(e,r);return(0,p.mdx)(m,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"quickstarts"},"Quickstarts"),(0,p.mdx)("p",null,"Before getting started with ",(0,p.mdx)("a",{parentName:"p",href:"/pdfservices-api-documentation/overview/pdf-electronic-seal-api/#what-is-pdf-electronic-seal"},"PDF Electronic Seal API"),", verify the ",(0,p.mdx)("a",{parentName:"p",href:"prerequisites.md"},"prerequisites"),". "),(0,p.mdx)("p",null,"The client has to call the PDF Electronic Seal API with the appropriate parameters to get the digitally signed PDF."),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.92452830188679%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/dda86/sealFlow.webp 265w","/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/010e6/sealFlow.webp 530w","/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/668f0/sealFlow.webp 1060w","/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/89d57/sealFlow.webp 1590w","/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/5a688/sealFlow.webp 2010w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/28773/sealFlow.png 265w","/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/a0177/sealFlow.png 530w","/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/ea60f/sealFlow.png 1060w","/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/684d5/sealFlow.png 1590w","/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/88aa2/sealFlow.png 2010w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/0e85e83de1db929e3d497d21f1b8ffb8/ea60f/sealFlow.png",alt:"Seal Workflow",title:"Seal Workflow",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("h2",{id:"parameters"},"Parameters"),(0,p.mdx)("h3",{id:"signature-format-required"},"Signature Format (",(0,p.mdx)("em",{parentName:"h3"},"Required"),")"),(0,p.mdx)("p",null,"Specifies a supported digital signature format:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},"PADES : This is the latest and improved signature format which is strict, concrete, and secure. For details, see ",(0,p.mdx)("a",{parentName:"li",href:"https://www.etsi.org/deliver/etsi_ts/102700_102799/10277803/01.02.01_60/ts_10277803v010201p.pdf"},"ETSI TS 102 778-3"),"  "),(0,p.mdx)("li",{parentName:"ul"},"PKCS#7 : This signature format is less stringent than PADES since it permits more PDF changes without invalidating the digital signature. For details, see ",(0,p.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/dc-acrobat-sdk-docs/standards/pdfstandards/pdf/PDF32000_2008.pdf"},"ISO 32000-1"))),(0,p.mdx)("h3",{id:"tsp-credential-information-required"},"TSP Credential Information (",(0,p.mdx)("em",{parentName:"h3"},"Required"),")"),(0,p.mdx)("p",null,"TSP parameters encapsulate the signer's ",(0,p.mdx)("a",{parentName:"p",href:"/pdfservices-api-documentation/overview/pdf-electronic-seal-api/prerequisites/#step-1-procure-certificate-credentials"},"certificate credential")," as well as the associated authentication and authorization data."),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"TSP Name"),"  (",(0,p.mdx)("em",{parentName:"p"},"Required"),"): Specifies the name of the Trust Service Provider used to generate the certificate.")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"TSP Credential Id"),"  (",(0,p.mdx)("em",{parentName:"p"},"Required"),"): Specifies the digital ID stored with the TSP provider that should be used for sealing.")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"TSP Authorization Context"),"  (",(0,p.mdx)("em",{parentName:"p"},"Required"),"): Encapsulates the service authorization data required to communicate with the TSP and access CSC provider APIs."),(0,p.mdx)("ul",{parentName:"li"},(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Access Token"),"  (",(0,p.mdx)("em",{parentName:"li"},"Required"),"): Specifies the service access token used to authorize access to the CSC provider hosted APIs."),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Token Type"),": Specifies the type of service token which is Bearer."))),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"TSP Credential Authorization Parameter"),"  (",(0,p.mdx)("em",{parentName:"p"},"Required"),"): Encapsulates the credential's authorization information required to authorize access to their signing keys."),(0,p.mdx)("ul",{parentName:"li"},(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"PIN"),"  (",(0,p.mdx)("em",{parentName:"li"},"Required"),"): Specifies the PIN associated with credential ID.")))),(0,p.mdx)("h3",{id:"seal-field-parameters---required"},"Seal Field Parameters   (",(0,p.mdx)("em",{parentName:"h3"},"Required"),")"),(0,p.mdx)("p",null,"The seal field parameters are required to create a new unsigned signature field or sign an existing field."),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"Field Name"),"  (",(0,p.mdx)("em",{parentName:"p"},"Required"),"): The signature field's name. This must be a non-empty string. If signature field with this field name already exist, that field will be used.\nIf it does not exist, a signature field with this field name will be created.")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"Visibility"),": Specifies whether the signature field is visible. The default value of ",(0,p.mdx)("inlineCode",{parentName:"p"},"true")," creates a visible signature.")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"Page Number"),": Specifies the page number to which the signature field should be attached. Page numbers are 1-based. The page number is only ",(0,p.mdx)("strong",{parentName:"p"},"required")," if the signature field does not already exist in the pdf document. If this is specified along with the signature field then it overrides the page on which signature field is present in the document.")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("strong",{parentName:"p"},"Location"),": Specifies the coordinates of the signature appearance's bounding box in default PDF user space units. The location is only ",(0,p.mdx)("strong",{parentName:"p"},"required")," if the signature field does not already exist in the pdf document. If this is specified along with the signature field then it overrides the existing signature bounding box."),(0,p.mdx)("ul",{parentName:"li"},(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Left"),": The left x-coordinate"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Bottom"),": The bottom y-coordinate"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Right"),": The right x-coordinate"),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"Top"),": The top y-coordinate")))),(0,p.mdx)("p",null,"The ",(0,p.mdx)("strong",{parentName:"p"},"Location")," and ",(0,p.mdx)("strong",{parentName:"p"},"Page Number")," fields are ",(0,p.mdx)("strong",{parentName:"p"},"optional")," if the signature field is already added in the input PDF document. To add the signature field explicitly, see ",(0,p.mdx)("a",{parentName:"p",href:"https://www.adobe.com/sign/hub/how-to/add-a-signature-block-to-pdf"},"how to place a signature field in a PDF"),"."),(0,p.mdx)("h3",{id:"seal-appearance-parameters"},"Seal Appearance Parameters"),(0,p.mdx)("p",null,"Specifies signature field appearance parameters. These are an enum set of display items: NAME, DATE, DISTINGUISHED_NAME, LABELS and SEAL_IMAGE. Specifies the information to display in the signature. NAME and LABELS are the default values."),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"NAME"),": Specifies that the signer's name should be displayed in the signature appearance.\n",(0,p.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"18.867924528301888%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/dda86/sealName.webp 265w","/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/010e6/sealName.webp 530w","/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/668f0/sealName.webp 1060w","/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/89d57/sealName.webp 1590w","/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/0b34d/sealName.webp 1920w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/28773/sealName.png 265w","/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/a0177/sealName.png 530w","/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/ea60f/sealName.png 1060w","/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/684d5/sealName.png 1590w","/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/ac7a9/sealName.png 1920w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/508c07d19c848f878c4a4cc531cba6dc/ea60f/sealName.png",alt:"Display Options",title:"Display Options",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"DATE"),": Specifies that the signing date/time should be displayed in the signature appearance. This option only controls whether the value of the\ntime/date in the signature dictionary is displayed or not. This value should not be mistaken for a signed timestamp from a timestamp authority.\n",(0,p.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.754716981132074%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/dda86/sealDate.webp 265w","/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/010e6/sealDate.webp 530w","/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/668f0/sealDate.webp 1060w","/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/89d57/sealDate.webp 1590w","/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/3363e/sealDate.webp 1632w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/28773/sealDate.png 265w","/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/a0177/sealDate.png 530w","/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/ea60f/sealDate.png 1060w","/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/684d5/sealDate.png 1590w","/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/c7b1b/sealDate.png 1632w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/45df4efde75cb2a82488717a7918d647/ea60f/sealDate.png",alt:"Display Options",title:"Display Options",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"DISTINGUISHED_NAME"),": Specifies that the distinguished name information from the signer's certificate should be displayed in the signature appearance.\n",(0,p.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.132075471698116%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/dda86/sealDN.webp 265w","/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/010e6/sealDN.webp 530w","/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/668f0/sealDN.webp 1060w","/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/89d57/sealDN.webp 1590w","/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/fb2fc/sealDN.webp 1918w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/28773/sealDN.png 265w","/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/a0177/sealDN.png 530w","/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/ea60f/sealDN.png 1060w","/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/684d5/sealDN.png 1590w","/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/4c40c/sealDN.png 1918w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/6c4e319e757de28f4c87c87231f0495e/ea60f/sealDN.png",alt:"Display Options",title:"Display Options",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"LABELS"),": Specifies that text labels should be displayed in the signature appearance.\n",(0,p.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.754716981132074%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/dda86/sealLabel.webp 265w","/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/010e6/sealLabel.webp 530w","/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/668f0/sealLabel.webp 1060w","/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/89d57/sealLabel.webp 1590w","/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/c8b27/sealLabel.webp 1922w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/28773/sealLabel.png 265w","/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/a0177/sealLabel.png 530w","/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/ea60f/sealLabel.png 1060w","/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/684d5/sealLabel.png 1590w","/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/e05f4/sealLabel.png 1922w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b4f6e5ffaaa1492b71b2c3943b87a08e/ea60f/sealLabel.png",alt:"Display Options",title:"Display Options",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("strong",{parentName:"li"},"SEAL_IMAGE"),": Specifies that the seal image should be displayed in the signature appearance.\n",(0,p.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.67924528301887%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/dda86/sealImage.webp 265w","/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/010e6/sealImage.webp 530w","/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/668f0/sealImage.webp 1060w","/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/89d57/sealImage.webp 1590w","/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/0b34d/sealImage.webp 1920w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/28773/sealImage.png 265w","/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/a0177/sealImage.png 530w","/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/ea60f/sealImage.png 1060w","/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/684d5/sealImage.png 1590w","/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/ac7a9/sealImage.png 1920w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/bcbf4a6d5dc3caba17d4a445c8279343/ea60f/sealImage.png",alt:"Display Options",title:"Display Options",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nIf the seal image is not present in the request body, the default Acrobat trefoil image is used.\n",(0,p.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.660377358490567%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/dda86/sealImage_default.webp 265w","/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/010e6/sealImage_default.webp 530w","/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/668f0/sealImage_default.webp 1060w","/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/89d57/sealImage_default.webp 1590w","/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/5839c/sealImage_default.webp 1630w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/28773/sealImage_default.png 265w","/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/a0177/sealImage_default.png 530w","/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/ea60f/sealImage_default.png 1060w","/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/684d5/sealImage_default.png 1590w","/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/b9339/sealImage_default.png 1630w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/6aadfaa6167303f79dbb5281ecd6d9f5/ea60f/sealImage_default.png",alt:"Display Options",title:"Display Options",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example JSON")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "signatureFormat": "PADES",\n  "cscCredentialOptions": {\n    "authorizationContext": {\n      "accessToken": "<ACCESS TOKEN>",\n      "tokenType": "Bearer"\n    },\n    "credentialAuthParameters": {\n      "pin": "<PIN>"\n    },\n    "providerName": "<PROVIDER_NAME>",\n    "credentialId": "<CREDENTIAL_ID>"\n  },\n  "sealFieldOptions": {\n    "pageNumber": 1,\n    "fieldName": "Signature",\n    "visible": true,\n    "location": {\n      "top": 300,\n      "bottom": 250,\n      "left": 300,\n      "right": 500\n    }\n  },\n  "sealAppearanceOptions": {\n    "displayOptions": [\n      "DATE",\n      "DISTINGUISHED_NAME",\n      "SEAL_IMAGE"\n    ]\n  }\n}\n')),(0,p.mdx)("h2",{id:"workflows"},"Workflows"),(0,p.mdx)("p",null,"There are two ways to access PDF Electronic Seal API: via the REST API or with the PDF Services SDKs. "),(0,p.mdx)("h3",{id:"rest-api"},"REST API"),(0,p.mdx)("p",null,"Clients using the REST API must perform the following: "),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/document-services/docs/apis/#tag/Assets"},"Generate asset IDs for all the input documents"),"."),(0,p.mdx)("li",{parentName:"ol"},"Call the ",(0,p.mdx)("inlineCode",{parentName:"li"},"/asset")," API with ",(0,p.mdx)("inlineCode",{parentName:"li"},"mediaType")," in the request specifying the document upload type. For example, ",(0,p.mdx)("inlineCode",{parentName:"li"},"application/pdf"),". The API responds with an asset ID and upload URI. "),(0,p.mdx)("li",{parentName:"ol"},"Request to upload the input document to the upload URI."),(0,p.mdx)("li",{parentName:"ol"},"Invoke PDF Electronic Seal API (/pdf-services/operation/electronicseal) by providing the asset IDs generated in step 1 and other required sealing parameters. In the response, the client receives the job URI in the location header. ",(0,p.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.electronicseal"},"Details"),"."),(0,p.mdx)("li",{parentName:"ol"},"Use the job URI to poll the status of the submitted job (Electronic Seal operation). The response includes a job status: ",(0,p.mdx)("em",{parentName:"li"},"In progress"),", ",(0,p.mdx)("em",{parentName:"li"},"Failed")," or ",(0,p.mdx)("em",{parentName:"li"},"Done"),". If the status is done, the seal API returns an asset ID and download URI. ",(0,p.mdx)("strong",{parentName:"li"},"This download URI is valid for 24 hours."),"."),(0,p.mdx)("li",{parentName:"ol"},"Download the digitally signed pdf using download URI from above step.")),(0,p.mdx)("h3",{id:"pdf-services-sdks"},"PDF Services SDKs"),(0,p.mdx)("p",null,"Clients can also access the PDF Electronic Seal API via PDF Services SDKs. For additional details, see ",(0,p.mdx)("a",{parentName:"p",href:"../pdf-services-api/"},"Quickstarts"),"."),(0,p.mdx)("p",null,"Clients using the PDF Services SDKs must perform the following: "),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},"Save the input document and seal image on the local machine. File paths must be absolute."),(0,p.mdx)("li",{parentName:"ol"},"Save the ",(0,p.mdx)("inlineCode",{parentName:"li"},"pdfservices-api-credentials.json")," file created after ",(0,p.mdx)("a",{parentName:"li",href:"../pdf-services-api/#authentication"},"generating credentials")),(0,p.mdx)("li",{parentName:"ol"},"Make a call to the PDF Electronic Seal operation that includes the following: ",(0,p.mdx)("ul",{parentName:"li"},(0,p.mdx)("li",{parentName:"ul"},"The file path to an input PDF (from the local machine). "),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"/pdfservices-api-documentation/overview/pdf-electronic-seal-api/quickstarts/#parameters"},"Required parameters")),(0,p.mdx)("li",{parentName:"ul"},"Specify an optional file path to a logo/watermark/background image used as part of the signature field's signed appearance. Supported formats include: ",(0,p.mdx)("ul",{parentName:"li"},(0,p.mdx)("li",{parentName:"ul"},"application/pdf"),(0,p.mdx)("li",{parentName:"ul"},"image/jpeg"),(0,p.mdx)("li",{parentName:"ul"},"image/png"))))),(0,p.mdx)("li",{parentName:"ol"},"The digitally signed pdf file obtained  will be saved to specified output file path.")),(0,p.mdx)("p",null,"Use the samples below to generate a PDF with an electronic seal."),(0,p.mdx)("p",null,"Please refer the ",(0,p.mdx)("a",{parentName:"p",href:"../pdf-services-api/howtos/api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,p.mdx)(c,{slots:"heading, code",repeat:"2",languages:"Java, Rest API",mdxType:"CodeBlock"}),(0,p.mdx)("h5",{id:"java"},"Java"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.electronicseal.ESealWithCustomAppearanceOptions\n\npackage com.adobe.pdfservices.operation.samples.electronicseal;\n\npublic class ElectronicSeal {\n\n    // Initialize the logger.\n    private static final Logger LOGGER = LoggerFactory.getLogger(ElectronicSeal.class);\n\n    public static void main(String[] args) {\n        try {\n\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            // Create an ExecutionContext using credentials.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            //Get the input document to perform the sealing operation\n            FileRef sourceFile = FileRef.createFromLocalFile("<SOURCE_DOCUMENT_FILE_PATH>");\n\n            //Get the background seal image for signature , if required.\n            FileRef sealImageFile = FileRef.createFromLocalFile("<SEAL_IMAGE_FILE_PATH>");\n\n            //Create SealAppearanceOptions and add the required signature appearance items\n            SealAppearanceOptions sealAppearanceOptions = new SealAppearanceOptions();\n            sealAppearanceOptions.addAppearanceItem(SealAppearanceItem.NAME);\n            sealAppearanceOptions.addAppearanceItem(SealAppearanceItem.LABELS);\n            sealAppearanceOptions.addAppearanceItem(SealAppearanceItem.DATE);\n            sealAppearanceOptions.addAppearanceItem(SealAppearanceItem.SEAL_IMAGE);\n            sealAppearanceOptions.addAppearanceItem(SealAppearanceItem.DISTINGUISHED_NAME);\n\n            //Set the Seal Field Name to be created in input PDF document.\n            String sealFieldName = "<SEAL_FIELD_NAME>";\n\n            //Set the page number in input document for applying seal.\n            Integer sealPageNumber = 1;\n\n            //Set if seal should be visible or invisible.\n            Boolean sealVisible = true;\n\n            //Create SealFieldLocationOptions instance and set the coordinates for applying signature\n            SealFieldLocationOptions sealFieldLocationOptions = new SealFieldLocationOptions(150, 250, 350, 200);\n\n            //Create SealFieldOptions instance with required details.\n            SealFieldOptions sealFieldOptions = new SealFieldOptions.Builder(sealFieldName)\n                    .setSealFieldLocationOptions(sealFieldLocationOptions)\n                    .setPageNumber(sealPageNumber)\n                    .setVisible(sealVisible)\n                    .build();\n\n            //Set the name of TSP Provider being used.\n            String providerName = "<PROVIDER_NAME>";\n\n            //Set the access token to be used to access TSP provider hosted APIs.\n            String accessToken = "<ACCESS TOKEN>";\n\n            //Set the credential ID.\n            String credentialID = "<CREDENTIAL_ID>";\n\n            //Set the PIN generated while creating credentials.\n            String credentialPin = "<PIN>";\n\n            //Create SealCredentialOptions instance with required certificate details.\n            SealCredentialOptions sealCredentialOptions = new  CSCCredentialOptions.Builder(providerName, credentialID, credentialPin, accessToken).setTokenType("Bearer").build();\n\n            //Create SealingOptions instance with all the sealing parameters.\n            SealOptions sealOptions = new SealOptions.Builder(SignatureFormat.PKCS7, sealCredentialOptions,\n                    sealFieldOptions).setSealAppearanceOptions(sealAppearanceOptions).build();\n\n            //Create a PDFElectronicSealOptions instance using the SealOptions instance\n            PDFElectronicSealOptions pdfElectronicSealOptions = new PDFElectronicSealOptions(sealOptions);\n\n            //Create the PDFElectronicSealOperation instance using the PDFElectronicSealOptions instance\n            PDFElectronicSealOperation pdfElectronicSealOperation = PDFElectronicSealOperation.createNew(pdfElectronicSealOptions);\n\n            //Set the input source file for PDFElectronicSealOperation instance\n            pdfElectronicSealOperation.setInputDocument(sourceFile);\n\n            //Set the optional input seal image for PDFElectronicSealOperation instance\n            pdfElectronicSealOperation.setSealImage(sealImageFile);\n\n            //Execute the operation\n            FileRef result = pdfElectronicSealOperation.execute(executionContext);\n\n            //Save the output at specified location\n            result.saveAs("output/sealedOutput.pdf");\n\n\n        } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n            LOGGER.error("Exception encountered while executing operation", ex);\n        }\n    }\n}\n\n')),(0,p.mdx)("h5",{id:"rest-api-1"},"REST API"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},'curl --location --request POST \'https://pdf-services.adobe.io/operation/electronicseal\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "inputDocumentAssetID": "urn:aaid:AS:UE1:23c30ee0-2c4d-46d6-87f2-087832fca718",\n    "sealImageAssetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n    "sealOptions": {\n        "signatureFormat": "PKCS7",\n        "cscCredentialOptions": {\n            "credentialId": "[ADOBE]_xxxx_xx:35",\n            "providerName": "intxxxxxst",\n            "authorizationContext": {\n                "tokenType": "bearer",\n                "accessToken": "b7338a1f-xxxx-xxxx-xxxx-1eec91c47c12"\n            },\n            "credentialAuthParameters": {\n                "pin": "12xxxx65"\n            }\n        },\n        "sealFieldOptions": {\n            "location": {\n                "top": 300,\n                "left": 50,\n                "right": 250,\n                "bottom": 100\n            },\n            "fieldName": "mytestfield",\n            "pageNumber": 1\n        },\n        "sealAppearanceOptions": {\n            "displayOptions": [\n                "NAME",\n                "DATE",\n                "DISTINGUISHED_NAME",\n                "LABELS",\n                "SEAL_IMAGE"\n            ]\n        }\n    }\n}\'\n')))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-0-0-pdf-electronic-seal-api-quickstarts-md-f43735bb11bdd57aa274.js.map