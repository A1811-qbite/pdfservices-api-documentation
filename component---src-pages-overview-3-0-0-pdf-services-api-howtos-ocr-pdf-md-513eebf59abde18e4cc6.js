"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6610],{79805:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return m}});var o,r=t(87462),i=t(63366),a=(t(15007),t(64983)),c=t(91515),s=["components"],p={},l=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),d={_frontmatter:p},u=c.Z;function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.mdx)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"ocr-pdf"},"OCR PDF"),(0,a.mdx)("p",null,"Use built-in optical character recognition (OCR) to convert images to text and enable fully text searchable documents for archiving and creation of searchable indexes."),(0,a.mdx)("h2",{id:"rest-api"},"Rest API"),(0,a.mdx)("p",null,"See our public API Reference for ",(0,a.mdx)("a",{parentName:"p",href:"../../../apis/#tag/OCR"},"OCR PDF")),(0,a.mdx)("h2",{id:"text-recognition-ocr"},"Text recognition (OCR)"),(0,a.mdx)("p",null,"Optical character recognition (OCR) converts images to text so that you\nand your users can fully interact with the PDF file. After performing\nOCR, the PDF may be fully editable and searchable. The input format must\nbe ",(0,a.mdx)("inlineCode",{parentName:"p"},"application/pdf"),"."),(0,a.mdx)("p",null,"This sample defaults to the en-us locale. For other languages, see ",(0,a.mdx)("a",{parentName:"p",href:"#ocr-with-explicit-language"},"OCR with explicit language.")),(0,a.mdx)("p",null,"Please refer the ",(0,a.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,a.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"java"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.ocrpdf.OcrPDF\n \n public class OcrPDF {\n \n  // Initialize the logger.\n  private static final Logger LOGGER = LoggerFactory.getLogger(OcrPDF.class);\n \n  public static void main(String[] args) {\n \n   try {\n \n    // Initial setup, create credentials instance.\n    Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n      .fromFile("pdfservices-api-credentials.json")\n      .build();\n \n    //Create an ExecutionContext using credentials and create a new operation instance.\n    ExecutionContext executionContext = ExecutionContext.create(credentials);\n    OCROperation ocrOperation = OCROperation.createNew();\n \n    // Set operation input from a source file.\n    FileRef source = FileRef.createFromLocalFile("src/main/resources/ocrInput.pdf");\n    ocrOperation.setInput(source);\n \n    // Execute the operation\n    FileRef result = ocrOperation.execute(executionContext);\n \n    // Save the result at the specified location\n    result.saveAs("output/ocrOutput.pdf");\n \n   } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n    LOGGER.error("Exception encountered while executing operation", ex);\n   }\n  }\n }\n')),(0,a.mdx)("h4",{id:"net"},".NET"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd OcrPDF/\n// dotnet run OcrPDF.csproj\n\n namespace OcrPDF\n {\n   class Program\n   {\n     private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n     static void Main()\n     {\n       //Configure the logging\n       ConfigureLogging();\n       try\n       {\n         // Initial setup, create credentials instance.\n         Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                 .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                 .Build();\n\n         //Create an ExecutionContext using credentials and create a new operation instance.\n         ExecutionContext executionContext = ExecutionContext.Create(credentials);\n         OCROperation ocrOperation = OCROperation.CreateNew();\n\n         // Set operation input from a source file.\n         FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"ocrInput.pdf");\n         ocrOperation.SetInput(sourceFileRef);\n\n         // Execute the operation.\n         FileRef result = ocrOperation.Execute(executionContext);\n\n         // Save the result to the specified location.\n         result.SaveAs(Directory.GetCurrentDirectory() + "/output/ocrOperationOutput.pdf");\n       }\n       catch (ServiceUsageException ex)\n       {\n         log.Error("Exception encountered while executing operation", ex);\n       }\n       // Catch more errors here. . .\n     }\n\n     static void ConfigureLogging()\n     {\n       ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n       XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n     }\n   }\n }\n')),(0,a.mdx)("h4",{id:"node-js"},"Node JS"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/ocr/ocr-pdf.js\n\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n try {\n   // Initial setup, create credentials instance.\n   const credentials =  PDFServicesSdk.Credentials\n       .serviceAccountCredentialsBuilder()\n       .fromFile(\"pdfservices-api-credentials.json\")\n       .build();\n\n   // Create an ExecutionContext using credentials and create a new operation instance.\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n       ocrOperation = PDFServicesSdk.OCR.Operation.createNew();\n\n   // Set operation input from a source file.\n   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/ocrInput.pdf');\n   ocrOperation.setInput(input);\n\n   // Execute the operation and Save the result to the specified location.\n   ocrOperation.execute(executionContext)\n       .then(result => result.saveAsFile('output/ocrOutput.pdf'))\n       .catch(err => {\n           if(err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n } catch (err) {\n   console.log('Exception encountered while executing operation', err);\n }\n")),(0,a.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Ocr\n\ncurl --location --request POST 'https://pdf-services.adobe.io/operation/ocr' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--data-raw '{\n    \"assetID\": \"urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718\"\n}'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-ocr\n")),(0,a.mdx)("h2",{id:"ocr-with-explicit-language"},"OCR with explicit language"),(0,a.mdx)("p",null,"You can perform OCR on files in other languages, including German,\nFrench, Danish, and other languages. Refer to ",(0,a.mdx)("inlineCode",{parentName:"p"},"OCRSupportedLocale")," and\n",(0,a.mdx)("inlineCode",{parentName:"p"},"OCRSupportedType")," in the API docs for a list of supported OCR locales\nand OCR types."),(0,a.mdx)("p",null,"As shown in the OcrPDFWithOptions sample, when you make a PDF file\nsearchable, you specify both the locale (language) and the type. There\nare two types which produce a different result:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"One type ensures that text is searchable and selectable, but\nmodifies the original image during the cleanup process (for example,\ndeskews it) before placing an invisible text layer over it. This\ntype removes unwanted artifacts and may result in a more readable\ndocument in some scenarios."),(0,a.mdx)("li",{parentName:"ul"},"The second (EXACT) type, also overlays a searchable text layer over\nthe original image, but in this case, the original image is\nunchanged. This type produces maximum fidelity to the original\nimage.")),(0,a.mdx)("p",null,"Please refer the ",(0,a.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,a.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,a.mdx)("h4",{id:"java-1"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java Dexec.mainClass=com.adobe.pdfservices.operation.samples.ocrpdf.OcrPDFWithOptions\n \n  public class OcrPDFWithOptions {\n \n    // Initialize the logger.\n    private static final Logger LOGGER = LoggerFactory.getLogger(OcrPDFWithOptions.class);\n \n    public static void main(String[] args) {\n \n        try {\n \n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n \n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n            OCROperation ocrOperation = OCROperation.createNew();\n \n            // Set operation input from a source file.\n            FileRef source = FileRef.createFromLocalFile("src/main/resources/ocrInput.pdf");\n            ocrOperation.setInput(source);\n \n            // Build OCR options from supported locales and OCR-types and set them into the operation\n            OCROptions ocrOptions = OCROptions.ocrOptionsBuilder()\n                    .withOCRLocale(OCRSupportedLocale.EN_US)\n                    .withOCRType(OCRSupportedType.SEARCHABLE_IMAGE_EXACT)\n                    .build();\n            ocrOperation.setOptions(ocrOptions);\n \n            // Execute the operation\n            FileRef result = ocrOperation.execute(executionContext);\n \n            // Save the result at the specified location\n            result.saveAs("output/ocrWithOptionsOutput.pdf");\n \n        } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n            LOGGER.error("Exception encountered while executing operation", ex);\n        }\n    }\n  }\n')),(0,a.mdx)("h4",{id:"net-1"},".NET"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd OcrPDFWithOptions\n// dotnet run OcrPDFWithOptions.csproj\n\n namespace OcrPDFWithOptions\n {\n  class Program\n  {\n    private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n    static void Main()\n    {\n      //Configure the logging\n      ConfigureLogging();\n      try\n      {\n        // Initial setup, create credentials instance.\n        Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                .Build();\n \n        //Create an ExecutionContext using credentials and create a new operation instance.\n        ExecutionContext executionContext = ExecutionContext.Create(credentials);\n        OCROperation ocrOperation = OCROperation.CreateNew();\n \n        // Set operation input from a source file.\n        FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"ocrWithOptionsInput.pdf");\n        ocrOperation.SetInput(sourceFileRef);\n        // Build OCR options from supported locales and OCR-types and set them into the operation\n        OCROptions ocrOptions = OCROptions.OCROptionsBuilder()\n            .WithOcrLocale(OCRSupportedLocale.EN_US)\n            .WithOcrType(OCRSupportedType.SEARCHABLE_IMAGE_EXACT)\n            .Build();\n        ocrOperation.SetOptions(ocrOptions);\n \n        // Execute the operation.\n        FileRef result = ocrOperation.Execute(executionContext);\n \n        // Save the result to the specified location.\n        result.SaveAs(Directory.GetCurrentDirectory() + "/output/ocrOperationWithOptionsOutput.pdf");\n      }\n      catch (ServiceUsageException ex)\n      {\n        log.Error("Exception encountered while executing operation", ex);\n      }\n      // Catch more errors here . . .\n    }\n \n    static void ConfigureLogging()\n    {\n      ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n      XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n    }\n  }\n }\n')),(0,a.mdx)("h4",{id:"node-js-1"},"Node JS"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/ocr/ocr-pdf-with-options.js\n\n  const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n \n  try {\n    // Initial setup, create credentials instance.\n    const credentials =  PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n \n    //Create an ExecutionContext using credentials and create a new operation instance.\n    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n        ocrOperation = PDFServicesSdk.OCR.Operation.createNew();\n \n    // Set operation input from a source file.\n    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/ocrInput.pdf');\n    ocrOperation.setInput(input);\n \n    // Provide any custom configuration options for the operation.\n    const options = new PDFServicesSdk.OCR.options.OCROptions.Builder()\n        .withOcrType(PDFServicesSdk.OCR.options.OCRSupportedType.SEARCHABLE_IMAGE_EXACT)\n        .withOcrLang(PDFServicesSdk.OCR.options.OCRSupportedLocale.EN_US)\n        .build();\n    ocrOperation.setOptions(options);\n \n    // Execute the operation and Save the result to the specified location.\n    ocrOperation.execute(executionContext)\n        .then(result => result.saveAsFile('output/ocrWithOptionsOutput.pdf'))\n        .catch(err => {\n            if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n  } catch (err) {\n    console.log('Exception encountered while executing operation', err);\n  }\n")),(0,a.mdx)("h4",{id:"rest-api-2"},"Rest API"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Ocr\n\ncurl --location --request POST 'https://pdf-services.adobe.io/operation/ocr' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--data-raw '{\n    \"assetID\": \"ce8fe9da-99f2-4d01-999e-42b9ce22ec5f\",\n    \"ocrLang\": \"en-US\"\n}'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-ocr\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-0-0-pdf-services-api-howtos-ocr-pdf-md-513eebf59abde18e4cc6.js.map