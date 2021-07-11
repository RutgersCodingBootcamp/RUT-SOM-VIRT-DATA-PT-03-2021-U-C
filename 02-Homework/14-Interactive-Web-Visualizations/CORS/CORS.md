# A Little More About CORS

* Modern browsers have a same origin policy that generally prevents scripts hosted on one web server from making calls to a different server.

* CORS is a mechanism that tells browsers, through the HTTP headers in a web application, to access selected resources from a web server.

* For example, say that you navigate to a news website, and you are served an ad from adspamnetwork.com.

* If browser restrictions weren't in place, and if you happen to be logged into PayPal, the JavaScript code in the ad might make an API call to PayPal and make unauthorized transactions.

* For this reason, browsers restrict a server from one site (adspamnetwork.com, for example) from making a request to a server from a different site (paypal.com).

* CORS provides a way to allow cross-origin requests.

* So how does a website, such as ebay.com, make API calls to PayPal?

  * The browser generally makes a preflight request to the server.

  * A preflight request verifies with the server whether the browser's origin is allowed to make a request to it, as well as other details, including the types of requests, and the types of files permitted to be transferred.

  * Then a request is made. The code on PayPal's server contains a CORS header that explicitly permits ebay.com to make API requests.

* To find out more about CORS, see the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) or [this guide](https://www.html5rocks.com/en/tutorials/cors/#toc-handling-a-not-so-simple-request) or [this Stack Overflow response](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work).
