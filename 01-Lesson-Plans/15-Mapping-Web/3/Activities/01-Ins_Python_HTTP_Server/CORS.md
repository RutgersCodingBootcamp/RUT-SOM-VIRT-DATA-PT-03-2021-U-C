# A Little More About CORS

Modern browsers have a **same-origin policy**, which generally prevents scripts that one web server hosts from making calls to another server. For example, say that you navigate to a news website and that you're served an ad from adspamnetwork.com. If browser restrictions aren't in place, and if you happen to be logged in to PayPal, the JavaScript code in the ad might make an API call to PayPal and make unauthorized transactions. For this reason, browsers restrict a server from one site (adspamnetwork.com, for example) from making a request to a server from another site (paypal.com).

So, how does a website, such as ebay.com, make API calls to PayPal?

**Cross-Origin Resource Sharing (CORS)** is a mechanism that tells browsers&mdash;through the HTTP headers in a web application&mdash;to access selected resources from a web server. CORS provides a way to allow cross-origin requests.

The following steps therefore allow a website to make API calls to PayPal:

1. The browser generally makes a preflight request to the server.

2. The preflight request checks with the server about whether the browser's origin can make a request to it. The preflight request also gets other details, including the types of requests that the server allows and the types of files that the server permits to be transferred.

3. The browser makes the request. The code on the PayPal server contains a CORS header that explicitly permits ebay.com to make API requests.

For more info about CORS, refer to [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), [web.dev](https://www.html5rocks.com/en/tutorials/cors/#toc-handling-a-not-so-simple-request) or [Stack Overflow](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work).
