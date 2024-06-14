"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4532],{21519:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return g}});var s=t(87462),a=t(45987),i=(t(15007),t(64983)),r=t(91515);const o=["components"],p={},l=(c="CodeBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var c;const u={_frontmatter:p},d=r.Z;function g(e){let{components:n}=e,t=(0,a.Z)(e,o);return(0,i.mdx)(d,(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"split-pdf"},"Split PDF"),(0,i.mdx)("p",null,"Split a PDF document into multiple smaller documents by simply specifying either the number of files, pages per file, or page ranges."),(0,i.mdx)("h2",{id:"rest-api"},"REST API"),(0,i.mdx)("p",null,"See our public API Reference for ",(0,i.mdx)("a",{parentName:"p",href:"../../../apis/#tag/Split-PDF"},"Split PDF"),"."),(0,i.mdx)("h2",{id:"split-pdf-by-number-of-pages"},"Split PDF by number of pages"),(0,i.mdx)("p",null,"This operation splits a PDF into multiple smaller documents. Simply use\nthe page count to specify the maximum number of pages of each output\nfile."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(l,{slots:"heading, code",repeat:"5",languages:"Java, .NET, Node JS, Python, REST API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.splitpdf.SplitPDFByNumberOfPages\n \n   public class SplitPDFByNumberOfPages {\n  \n     // Initialize the logger.\n     private static final Logger LOGGER = LoggerFactory.getLogger(SplitPDFByNumberOfPages.class);\n  \n     public static void main(String[] args) {\n         try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/splitPDFInput.pdf").toPath())) {\n            // Initial setup, create credentials instance\n            Credentials credentials = new ServicePrincipalCredentials(\n                    System.getenv("PDF_SERVICES_CLIENT_ID"),\n                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));\n\n            // Creates a PDF Services instance\n            PDFServices pdfServices = new PDFServices(credentials);\n\n            // Creates an asset(s) from source file(s) and upload\n            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());\n\n            // Create parameters for the job\n            SplitPDFParams splitPDFParams = new SplitPDFParams();\n            // Sets the maximum number of pages each of the output files can have\n            splitPDFParams.setPageCount(2);\n\n            // Creates a new job instance\n            SplitPDFJob splitPDFJob = new SplitPDFJob(asset, splitPDFParams);\n\n            // Submit the job and gets the job result\n            String location = pdfServices.submit(splitPDFJob);\n            PDFServicesResponse<SplitPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, SplitPDFResult.class);\n\n            // Get content from the resulting asset(s)\n            List<Asset> resultAssets = pdfServicesResponse.getResult().getAssets();\n            \n            Files.createDirectories(Paths.get("output/"));\n            int index = 0;\n            for (Asset resultAsset : resultAssets) {\n                StreamAsset streamAsset = pdfServices.getContent(resultAsset);\n\n                // Creates an output stream and copy stream asset\'s content to it\n                OutputStream outputStream = Files.newOutputStream(new File("output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf").toPath());\n                LOGGER.info("Saving asset at output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf");\n                IOUtils.copy(streamAsset.getInputStream(), outputStream);\n                outputStream.close();\n                index++;\n            }\n         } catch (IOException| ServiceApiException | SDKException | ServiceUsageException e) {\n             LOGGER.error("Exception encountered while executing operation", e);\n         }\n     }\n  \n   }\n')),(0,i.mdx)("h4",{id:"net"},".NET"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd SplitPDFByNumberOfPages/\n// dotnet run SplitPDFByNumberOfPages.csproj\n\n   namespace SplitPDFByNumberOfPages\n   {\n     class Program\n     {\n         private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n         static void Main()\n         {\n             //Configure the logging\n             ConfigureLogging();\n             try\n             {\n                 // Initial setup, create credentials instance.\n                 Credentials credentials = Credentials.ServicePrincipalCredentialsBuilder()\n                        .WithClientId("PDF_SERVICES_CLIENT_ID")\n                        .WithClientSecret("PDF_SERVICES_CLIENT_SECRET")\n                        .Build();\n  \n                 // Create an ExecutionContext using credentials.\n                 ExecutionContext executionContext = ExecutionContext.Create(credentials);\n  \n                 // Create a new operation instance\n                 SplitPDFOperation splitPDFOperation = SplitPDFOperation.CreateNew();\n  \n                 // Set operation input from a source file.\n                 FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"splitPDFInput.pdf");\n                 splitPDFOperation.SetInput(sourceFileRef);\n  \n                 // Set the maximum number of pages each of the output files can have.\n                 splitPDFOperation.SetPageCount(2);\n  \n                 // Execute the operation.\n                 List result = splitPDFOperation.Execute(executionContext);\n  \n                 // Save the result to the specified location.\n                 int index = 0;\n                 foreach (FileRef fileRef in result)\n                 {\n                     fileRef.SaveAs(Directory.GetCurrentDirectory() + "/output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf");\n                     index++;\n                 }\n  \n             }\n             catch (ServiceUsageException ex)\n             {\n                 log.Error("Exception encountered while executing operation", ex);\n             }\n             // Catch more errors here . . .\n         }\n  \n         static void ConfigureLogging()\n         {\n             ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n             XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n         }\n     }\n   }\n')),(0,i.mdx)("h4",{id:"node-js"},"Node JS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/splitpdf/split-pdf-by-number-of-pages.js\n\nconst {\n    ServicePrincipalCredentials,\n    PDFServices,\n    MimeType,\n    SplitPDFParams,\n    SplitPDFJob,\n    SplitPDFResult,\n    SDKError,\n    ServiceUsageError,\n    ServiceApiError\n} = require("@adobe/pdfservices-node-sdk");\nconst fs = require("fs");\n\n(async () => {\n    let readStream;\n    try {\n        // Initial setup, create credentials instance\n        const credentials = new ServicePrincipalCredentials({\n            clientId: process.env.PDF_SERVICES_CLIENT_ID,\n            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET\n        });\n\n        // Creates a PDF Services instance\n        const pdfServices = new PDFServices({credentials});\n\n        // Creates an asset(s) from source file(s) and upload\n        readStream = fs.createReadStream("./splitPDFInput.pdf")\n        const inputAsset = await pdfServices.upload({\n            readStream,\n            mimeType: MimeType.PDF\n        });\n\n        // Create parameters for the job\n        const params = new SplitPDFParams({\n            pageCount: 2\n        });\n\n        // Creates a new job instance\n        const job = new SplitPDFJob({inputAsset, params});\n\n        // Submit the job and get the job result\n        const pollingURL = await pdfServices.submit({job});\n        const pdfServicesResponse = await pdfServices.getJobResult({\n            pollingURL,\n            resultType: SplitPDFResult\n        });\n\n        // Get content from the resulting asset(s)\n        const resultAssets = pdfServicesResponse.result.assets;\n\n        for (let i = 0; i < resultAssets.length; i++) {\n            const streamAsset = await pdfServices.getContent({asset: resultAssets[i]});\n\n            // Creates an output stream and copy stream asset\'s content to it\n            const _outputFilePath = "./SplitPDFByNumberOfPagesOutput_" + i + ".pdf";\n            console.log(`Saving asset at ${_outputFilePath}`);\n\n            const writeStream = fs.createWriteStream(_outputFilePath);\n            streamAsset.readStream.pipe(writeStream);\n        }\n    } catch (err) {\n        if (err instanceof SDKError || err instanceof ServiceUsageError || err instanceof ServiceApiError) {\n            console.log("Exception encountered while executing operation", err);\n        } else {\n            console.log("Exception encountered while executing operation", err);\n        }\n    } finally {\n        readStream?.destroy();\n    }\n})();\n')),(0,i.mdx)("h4",{id:"python"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"# Get the samples from https://github.com/adobe/pdfservices-python-sdk-samples\n# Run the sample:\n# python src/splitpdf/split_pdf_by_number_of_pages.py\n\n# Initialize the logger\nlogging.basicConfig(level=logging.INFO)\n\nclass SplitPDFByNumberOfPages:\n    def __init__(self):\n        try:\n\n            file = open('splitPDFInput.pdf', 'rb')\n            input_stream = file.read()\n            file.close()\n\n            # Initial setup, create credentials instance\n            credentials = ServicePrincipalCredentials(\n                client_id=os.getenv('PDF_SERVICES_CLIENT_ID'),\n                client_secret=os.getenv('PDF_SERVICES_CLIENT_SECRET')\n            )\n            # Creates a PDF Services instance\n            pdf_services = PDFServices(credentials=credentials)\n\n            # Creates an asset(s) from source file(s) and upload\n            input_asset = pdf_services.upload(input_stream=input_stream,\n                                              mime_type=PDFServicesMediaType.PDF)\n\n            # Create parameters for the job\n            split_pdf_params = SplitPDFParams(page_count=2)\n\n            # Creates a new job instance\n            split_pdf_job = SplitPDFJob(input_asset, split_pdf_params)\n\n            # Submit the job and gets the job result\n            location = pdf_services.submit(split_pdf_job)\n            pdf_services_response = pdf_services.get_job_result(location, SplitPDFResult)\n\n            # Get content from the resulting asset(s)\n            result_assets = pdf_services_response.get_result().get_assets()\n\n            # Creates an output stream and copy stream asset's content to it\n            output_file_path = 'SplitPDFByNumberOfPagesOutput.pdf'\n\n            for i, result_asset in enumerate(result_assets):\n                stream_asset: StreamAsset = pdf_services.get_content(result_asset)\n                with open(f\"{output_file_path}_{i}.pdf\", \"wb\") as file:\n                    file.write(stream_asset.get_input_stream())\n\n        except (ServiceApiException, ServiceUsageException, SdkException) as e:\n            logging.exception(f'Exception encountered while executing operation: {e}')\n\n\nif __name__ == \"__main__\":\n    SplitPDFByNumberOfPages()\n")),(0,i.mdx)("h4",{id:"rest-api-1"},"REST API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Please refer our REST API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Split-PDF\n\ncurl --location --request POST 'https://pdf-services.adobe.io/operation/splitpdf' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--data-raw '{\n    \"assetID\": \"urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718\",\n    \"splitoption\": {\n        \"pageCount\": 9\n    }\n}'\n")),(0,i.mdx)("h2",{id:"split-pdf-by-page-ranges"},"Split PDF by page ranges"),(0,i.mdx)("p",null,"As an alternative to creating smaller PDFs with a set number of pages,\nyou can split PDFs into multiple smaller documents by specifying page\nranges where each page range corresponds to a single output file."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(l,{slots:"heading, code",repeat:"5",languages:"Java, .NET, Node JS, Python, REST API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java-1"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.splitpdf.SplitPDFByPageRanges\n \n    public class SplitPDFByPageRanges {\n   \n      // Initialize the logger.\n      private static final Logger LOGGER = LoggerFactory.getLogger(SplitPDFByPageRanges.class);\n   \n      public static void main(String[] args) {\n          try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/splitPDFInput.pdf").toPath())) {\n            // Initial setup, create credentials instance\n            Credentials credentials = new ServicePrincipalCredentials(\n                    System.getenv("PDF_SERVICES_CLIENT_ID"),\n                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));\n\n            // Creates a PDF Services instance\n            PDFServices pdfServices = new PDFServices(credentials);\n\n            // Creates an asset(s) from source file(s) and upload\n            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());\n\n            // Specify page ranges to split PDF\n            PageRanges pageRanges = getPageRanges();\n\n            // Create parameters for the job\n            SplitPDFParams splitPDFParams = new SplitPDFParams();\n            // Set the page ranges where each page range corresponds to a single output file\n            splitPDFParams.setPageRanges(pageRanges);\n\n            // Creates a new job instance\n            SplitPDFJob splitPDFJob = new SplitPDFJob(asset, splitPDFParams);\n\n            // Submit the job and gets the job result\n            String location = pdfServices.submit(splitPDFJob);\n            PDFServicesResponse<SplitPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, SplitPDFResult.class);\n\n            // Get content from the resulting asset(s)\n            List<Asset> resultAssets = pdfServicesResponse.getResult().getAssets();\n            \n            Files.createDirectories(Paths.get("output/"));\n            int index = 0;\n            for (Asset resultAsset : resultAssets) {\n                StreamAsset streamAsset = pdfServices.getContent(resultAsset);\n\n                // Creates an output stream and copy stream asset\'s content to it\n                OutputStream outputStream = Files.newOutputStream(new File("output/SplitPDFByPageRangesOutput_" + index + ".pdf").toPath());\n                LOGGER.info("Saving asset at output/SplitPDFByPageRangesOutput_" + index + ".pdf");\n                IOUtils.copy(streamAsset.getInputStream(), outputStream);\n                outputStream.close();\n                index++;\n            }\n          } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {\n              LOGGER.error("Exception encountered while executing operation", e);\n          }\n      }\n   \n      private static PageRanges getPageRanges() {\n        // Specify page ranges\n        PageRanges pageRanges = new PageRanges();\n        // Add page 1\n        pageRanges.addSinglePage(1);\n\n        // Add pages 3 to 4\n        pageRanges.addRange(3, 4);\n        return pageRanges;\n      }\n   \n    }\n      \n')),(0,i.mdx)("h4",{id:"net-1"},".NET"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd SplitPDFByPageRanges/\n// dotnet run SplitPDFByPageRanges.csproj\n\n namespace SplitPDFByPageRanges\n  {\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            //Configure the logging\n            ConfigureLogging();\n            try\n            {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServicePrincipalCredentialsBuilder()\n                        .WithClientId("PDF_SERVICES_CLIENT_ID")\n                        .WithClientSecret("PDF_SERVICES_CLIENT_SECRET")\n                        .Build();\n \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n \n                // Create a new operation instance\n                SplitPDFOperation splitPDFOperation = SplitPDFOperation.CreateNew();\n \n                // Set operation input from a source file.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"splitPDFInput.pdf");\n                splitPDFOperation.SetInput(sourceFileRef);\n \n                // Set the page ranges where each page range corresponds to a single output file.\n                PageRanges pageRanges = GetPageRanges();\n                splitPDFOperation.SetPageRanges(pageRanges);\n \n                // Execute the operation.\n                List result = splitPDFOperation.Execute(executionContext);\n \n                // Save the result to the specified location.\n                int index = 0;\n                foreach (FileRef fileRef in result)\n                {\n                    fileRef.SaveAs(Directory.GetCurrentDirectory() + "/output/SplitPDFByPageRangesOutput_" + index + ".pdf");\n                    index++;\n                }\n \n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            // Catch more errors here . . .\n        }\n \n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n \n        private static PageRanges GetPageRanges()\n        {\n            // Specify page ranges.\n            PageRanges pageRanges = new PageRanges();\n            // Add page 1.\n            pageRanges.AddSinglePage(1);\n \n            // Add pages 3 to 4.\n            pageRanges.AddRange(3, 4);\n            return pageRanges;\n        }\n    }\n  }\n')),(0,i.mdx)("h4",{id:"node-js-1"},"Node JS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/splitpdf/split-pdf-by-page-ranges.js\n\nconst {\n    ServicePrincipalCredentials,\n    PDFServices,\n    MimeType,\n    SplitPDFParams,\n    SplitPDFJob,\n    SplitPDFResult,\n    PageRanges,\n    SDKError,\n    ServiceUsageError,\n    ServiceApiError\n} = require("@adobe/pdfservices-node-sdk");\nconst fs = require("fs");\n\n(async () => {\n    let readStream;\n    try {\n        // Initial setup, create credentials instance\n        const credentials = new ServicePrincipalCredentials({\n            clientId: process.env.PDF_SERVICES_CLIENT_ID,\n            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET\n        });\n\n        // Creates a PDF Services instance\n        const pdfServices = new PDFServices({credentials});\n\n        // Creates an asset(s) from source file(s) and upload\n        readStream = fs.createReadStream("./splitPDFInput.pdf")\n        const inputAsset = await pdfServices.upload({\n            readStream,\n            mimeType: MimeType.PDF\n        });\n\n        // Create the page ranges where each page range corresponds to a single output file\n        const pageRanges = getPageRanges();\n\n        // Create parameters for the job\n        const params = new SplitPDFParams({pageRanges});\n\n        // Creates a new job instance\n        const job = new SplitPDFJob({inputAsset, params});\n\n        // Submit the job and get the job result\n        const pollingURL = await pdfServices.submit({job});\n        const pdfServicesResponse = await pdfServices.getJobResult({\n            pollingURL,\n            resultType: SplitPDFResult\n        });\n\n        // Get content from the resulting asset(s)\n        const resultAssets = pdfServicesResponse.result.assets;\n\n        for (let i = 0; i < resultAssets.length; i++) {\n            const streamAsset = await pdfServices.getContent({asset: resultAssets[i]});\n\n            // Creates an output stream and copy stream asset\'s content to it\n            const _outputFilePath = "./SplitPDFByPageRangesOutput_" + i + ".pdf";\n            console.log(`Saving asset at ${_outputFilePath}`);\n\n            const writeStream = fs.createWriteStream(_outputFilePath);\n            streamAsset.readStream.pipe(writeStream);\n        }\n    } catch (err) {\n        if (err instanceof SDKError || err instanceof ServiceUsageError || err instanceof ServiceApiError) {\n            console.log("Exception encountered while executing operation", err);\n        } else {\n            console.log("Exception encountered while executing operation", err);\n        }\n    } finally {\n        readStream?.destroy();\n    }\n})();\n\nconst getPageRanges = () => {\n    // Specify pages ranges.\n    const pageRanges = new PageRanges();\n    // Add page 1.\n    pageRanges.addSinglePage(1);\n    // Add pages 3 to 4.\n    pageRanges.addRange(3, 4);\n    return pageRanges;\n};\n')),(0,i.mdx)("h4",{id:"python-1"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"# Get the samples from https://github.com/adobe/pdfservices-python-sdk-samples\n# Run the sample:\n# python src/splitpdf/split_pdf_by_page_ranges.py\n\n# Initialize the logger\nlogging.basicConfig(level=logging.INFO)\n\nclass SplitPDFByPageRanges:\n    def __init__(self):\n        try:\n            file = open('splitPDFInput.pdf', 'rb')\n            input_stream = file.read()\n            file.close()\n\n            # Initial setup, create credentials instance\n            credentials = ServicePrincipalCredentials(\n                client_id=os.getenv('PDF_SERVICES_CLIENT_ID'),\n                client_secret=os.getenv('PDF_SERVICES_CLIENT_SECRET')\n            )\n\n            # Creates a PDF Services instance\n            pdf_services = PDFServices(credentials=credentials)\n\n            # Creates an asset(s) from source file(s) and upload\n            input_asset = pdf_services.upload(input_stream=input_stream,\n                                              mime_type=PDFServicesMediaType.PDF)\n\n            page_ranges = self.get_page_ranges()\n\n            # Create parameters for the job\n            split_pdf_params = SplitPDFParams(page_ranges=page_ranges)\n\n            # Creates a new job instance\n            split_pdf_job = SplitPDFJob(input_asset, split_pdf_params)\n\n            # Submit the job and gets the job result\n            location = pdf_services.submit(split_pdf_job)\n            pdf_services_response = pdf_services.get_job_result(location, SplitPDFResult)\n\n            # Get content from the resulting asset(s)\n            result_assets = pdf_services_response.get_result().get_assets()\n\n            # Creates an output stream and copy stream asset's content to it\n            output_file_path = 'splitPDFByPageRangesOutput.pdf'\n\n            for i, result_asset in enumerate(result_assets):\n                stream_asset: StreamAsset = pdf_services.get_content(result_asset)\n                with open(f\"{output_file_path}_{i}.pdf\", \"wb\") as file:\n                    file.write(stream_asset.get_input_stream())\n\n        except (ServiceApiException, ServiceUsageException, SdkException) as e:\n            logging.exception(f'Exception encountered while executing operation: {e}')\n\n    @staticmethod\n    def get_page_ranges() -> PageRanges:\n        # Specify page ranges\n        page_ranges = PageRanges()\n        # Add page 1\n        page_ranges.add_single_page(1)\n        # Add pages 3 to 4\n        page_ranges.add_range(3, 4)\n        return page_ranges\n\n\nif __name__ == \"__main__\":\n    SplitPDFByPageRanges()\n\n")),(0,i.mdx)("h4",{id:"rest-api-2"},"REST API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our REST API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Split-PDF\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/splitpdf\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n    "splitoption": {\n        "pageRanges": [\n            {\n                "start": 2,\n                "end": 4\n            },\n            {\n                "start": 7,\n                "end": 9\n            }\n        ]\n    }\n}\'\n')),(0,i.mdx)("h2",{id:"split-pdf-into-number-of-files"},"Split PDF into number of files"),(0,i.mdx)("p",null,"As an alternative to creating smaller PDFs by specifying a set number of\npages or a page range, you can split PDFs by file count. In this case,\nthe operation creates the specified number of files with each containing\nan identical number of pages (if possible)."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(l,{slots:"heading, code",repeat:"5",languages:"Java, .NET, Node JS, Python, REST API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java-2"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.splitpdf.SplitPDFIntoNumberOfFiles\n \n     public class SplitPDFIntoNumberOfFiles {\n    \n       // Initialize the logger.\n       private static final Logger LOGGER = LoggerFactory.getLogger(SplitPDFIntoNumberOfFiles.class);\n    \n       public static void main(String[] args) {\n           try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/splitPDFInput.pdf").toPath())) {\n                // Initial setup, create credentials instance\n                Credentials credentials = new ServicePrincipalCredentials(\n                        System.getenv("PDF_SERVICES_CLIENT_ID"),\n                        System.getenv("PDF_SERVICES_CLIENT_SECRET"));\n    \n                // Creates a PDF Services instance\n                PDFServices pdfServices = new PDFServices(credentials);\n    \n                // Creates an asset(s) from source file(s) and upload\n                Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());\n    \n                // Create parameters for the job\n                SplitPDFParams splitPDFParams = new SplitPDFParams();\n                // Sets the number of documents to split the input PDF file into\n                splitPDFParams.setFileCount(2);\n    \n                // Creates a new job instance\n                SplitPDFJob splitPDFJob = new SplitPDFJob(asset, splitPDFParams);\n    \n                // Submit the job and gets the job result\n                String location = pdfServices.submit(splitPDFJob);\n                PDFServicesResponse<SplitPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, SplitPDFResult.class);\n    \n                // Get content from the resulting asset(s)\n                List<Asset> resultAssets = pdfServicesResponse.getResult().getAssets();\n                \n                Files.createDirectories(Paths.get("output/"));\n                int index = 0;\n                for (Asset resultAsset : resultAssets) {\n                    StreamAsset streamAsset = pdfServices.getContent(resultAsset);\n    \n                    // Creates an output stream and copy stream asset\'s content to it\n                    OutputStream outputStream = Files.newOutputStream(new File("output/SplitPDFIntoNumberOfFilesOutput_" + index + ".pdf").toPath());\n                    LOGGER.info("Saving asset at output/SplitPDFIntoNumberOfFilesOutput_" + index + ".pdf");\n                    IOUtils.copy(streamAsset.getInputStream(), outputStream);\n                    outputStream.close();\n                    index++;\n                }\n           } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {\n               LOGGER.error("Exception encountered while executing operation", e);\n           }\n       }\n    \n     }\n      \n')),(0,i.mdx)("h4",{id:"net-2"},".NET"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd SplitPDFIntoNumberOfFiles/\n// dotnet run SplitPDFIntoNumberOfFiles.csproj\n\n  namespace SplitPDFIntoNumberOfFiles\n  {\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            //Configure the logging\n            ConfigureLogging();\n            try\n            {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServicePrincipalCredentialsBuilder()\n                        .WithClientId("PDF_SERVICES_CLIENT_ID")\n                        .WithClientSecret("PDF_SERVICES_CLIENT_SECRET")\n                        .Build();\n \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n \n                // Create a new operation instance\n                SplitPDFOperation splitPDFOperation = SplitPDFOperation.CreateNew();\n \n                // Set operation input from a source file.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"splitPDFInput.pdf");\n                splitPDFOperation.SetInput(sourceFileRef);\n \n                // Set the number of documents to split the input PDF file into.\n                splitPDFOperation.SetFileCount(2);\n \n                // Execute the operation.\n                List result = splitPDFOperation.Execute(executionContext);\n \n                // Save the result to the specified location.\n                int index = 0;\n                foreach (FileRef fileRef in result)\n                {\n                    fileRef.SaveAs(Directory.GetCurrentDirectory() + "/output/SplitPDFIntoNumberOfFilesOutput_" + index + ".pdf");\n                    index++;\n                }\n \n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n             // Catch more errors here . . .\n        }\n \n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n    }\n  }\n      \n')),(0,i.mdx)("h4",{id:"node-js-2"},"Node JS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/splitpdf/split-pdf-into-number-of-files.js\n\nconst {\n    ServicePrincipalCredentials,\n    PDFServices,\n    MimeType,\n    SplitPDFParams,\n    SplitPDFJob,\n    SplitPDFResult,\n    SDKError,\n    ServiceUsageError,\n    ServiceApiError\n} = require("@adobe/pdfservices-node-sdk");\nconst fs = require("fs");\n\n(async () => {\n    let readStream;\n    try {\n        // Initial setup, create credentials instance\n        const credentials = new ServicePrincipalCredentials({\n            clientId: process.env.PDF_SERVICES_CLIENT_ID,\n            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET\n        });\n\n        // Creates a PDF Services instance\n        const pdfServices = new PDFServices({credentials});\n\n        // Creates an asset(s) from source file(s) and upload\n        readStream = fs.createReadStream("./splitPDFInput.pdf")\n        const inputAsset = await pdfServices.upload({\n            readStream,\n            mimeType: MimeType.PDF\n        });\n\n        // Create parameters for the job\n        const params = new SplitPDFParams({\n            fileCount: 2\n        });\n\n        // Creates a new job instance\n        const job = new SplitPDFJob({inputAsset, params});\n\n        // Submit the job and get the job result\n        const pollingURL = await pdfServices.submit({job});\n        const pdfServicesResponse = await pdfServices.getJobResult({\n            pollingURL,\n            resultType: SplitPDFResult\n        });\n\n        // Get content from the resulting asset(s)\n        const resultAssets = pdfServicesResponse.result.assets;\n\n        for (let i = 0; i < resultAssets.length; i++) {\n            const streamAsset = await pdfServices.getContent({asset: resultAssets[i]});\n\n            // Creates an output stream and copy stream asset\'s content to it\n            const _outputFilePath = "./SplitPDFIntoNumberOfFilesOutput_" + i + ".pdf";\n            console.log(`Saving asset at ${_outputFilePath}`);\n\n            const writeStream = fs.createWriteStream(_outputFilePath);\n            streamAsset.readStream.pipe(writeStream);\n        }\n    } catch (err) {\n        if (err instanceof SDKError || err instanceof ServiceUsageError || err instanceof ServiceApiError) {\n            console.log("Exception encountered while executing operation", err);\n        } else {\n            console.log("Exception encountered while executing operation", err);\n        }\n    } finally {\n        readStream?.destroy();\n    }\n})();\n')),(0,i.mdx)("h4",{id:"python-2"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"# Get the samples from https://github.com/adobe/pdfservices-python-sdk-samples\n# Run the sample:\n# python src/splitpdf/split_pdf_into_number_of_files.py\n\n# Initialize the logger\nlogging.basicConfig(level=logging.INFO)\n\nclass SplitPDFIntoNumberOfFiles:\n    def __init__(self):\n        try:\n            file = open('splitPDFInput.pdf', 'rb')\n            input_stream = file.read()\n            file.close()\n\n            # Initial setup, create credentials instance\n            credentials = ServicePrincipalCredentials(\n                client_id=os.getenv('PDF_SERVICES_CLIENT_ID'),\n                client_secret=os.getenv('PDF_SERVICES_CLIENT_SECRET')\n            )\n\n            # Creates a PDF Services instance\n            pdf_services = PDFServices(credentials=credentials)\n\n            # Creates an asset(s) from source file(s) and upload\n            input_asset = pdf_services.upload(input_stream=input_stream,\n                                              mime_type=PDFServicesMediaType.PDF)\n\n            # Create parameters for the job\n            split_pdf_params = SplitPDFParams(file_count=2)\n\n            # Creates a new job instance\n            split_pdf_job = SplitPDFJob(input_asset, split_pdf_params)\n\n            # Submit the job and gets the job result\n            location = pdf_services.submit(split_pdf_job)\n            pdf_services_response = pdf_services.get_job_result(location, SplitPDFResult)\n\n            # Get content from the resulting asset(s)\n            result_assets = pdf_services_response.get_result().get_assets()\n\n            # Creates an output stream and copy stream asset's content to it\n            output_file_path = 'splitPDFIntoNumberOfFilesOutput.pdf'\n\n            for i, result_asset in enumerate(result_assets):\n                stream_asset: StreamAsset = pdf_services.get_content(result_asset)\n                with open(f\"{output_file_path}_{i}.pdf\", \"wb\") as file:\n                    file.write(stream_asset.get_input_stream())\n\n        except (ServiceApiException, ServiceUsageException, SdkException) as e:\n            logging.exception(f'Exception encountered while executing operation: {e}')\n\n\nif __name__ == \"__main__\":\n    SplitPDFIntoNumberOfFiles()\n\n")),(0,i.mdx)("h4",{id:"rest-api-3"},"REST API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Please refer our REST API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Split-PDF\n\ncurl --location --request POST 'https://pdf-services.adobe.io/operation/splitpdf' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--data-raw '{\n    \"assetID\": \"urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718\",\n    \"splitoption\": {\n        \"fileCount\": 3\n    }\n}'\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-howtos-split-pdf-md-f85130753d72f3424b09.js.map