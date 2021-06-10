### HTML Requirements

Required elements include:

* `<!DOCTYPE html>` - **required** - informs the browser which version of HTML (or XML) you used to write the document. Doctype is a declaration, not a tag; you can also refer to it as "document type declaration", or "DTD" for short.

* `<html>` - **required** - represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.

* `<head>` - **required** - not to be confused with [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), the head provides general information about the document, including its title and links to its scripts and stylesheets. None of the content inside the head should be content that needs to be visible on the rendered page.

* `<meta charset-"utf-8">` - **required** - the meta element is used for representing any metadata information that can't be represented by another HTML meta-related element (`<title>`, `<style>`, `<script>`, etc.). In this case, we're specifying that we want to specify the character encoding of a web page. Essentially this helps tell the browser which language, writing system, and characters are being used in a web page. utf-8 is one of the most comprehensive and widely used and recommended. Students may occasionally see this not used, since most of the time this will be correctly inferred by the browser, or sent back from the server; it's still a good idea to include it to make sure that characters in our content are correctly interpreted, according to [The World Wide Web Consortium](https://www.w3.org/International/questions/qa-html-encoding-declarations.en)

* `<title>` - **required** - defines the title of the document as shown in the browser's title bar or on the page tab. It can only contain text, any contained tabs are ignored.

* `<body>` - **required** - represents the content of an HTML document. All content that needs to be rendered to the page should be placed inside the body.

**HINT: ! Tab**
