<summary><strong>Using Python HTTP Server</strong></summary>
<details>

* With D3.json(), we can also read local JSON files instead of using APIs. However, we need to use a web server to make the file available to the webpage. This is a **CORS**, or **Cross-Origin Resource Sharing**, requirement.

*  Servers at a high level:

  * A server is a program or device that performs actions such as processing and sharing data.

  * For example, when a user logs in on a website, the server receives the user's information, compares it against information in its database, and sends it back to the user.

  * This is called a **request-response model**. The user, also known as the client, sends a request to the webpage server, which in return sends the requested data in response.

* Open `index.html` in a browser and open the console. Point out the error and explain:

  * This is a **CORS**, or **Cross-Origin Resource Sharing**, error.

    ![cors error](Images/cors_error.png)

* Why a browser can't read the JSON file directly:

  * Browsers, for security reasons, heavily restrict reading from, and writing to, local files.

  * If access to local files were allowed, remote sites would be allowed to read and manipulate your private data. Or simply opening a local file with the browser could trigger a malicious script.

  * Running a static server, `python -m http.server` in this case, allows us to skirt this restriction.

* Python’s HTTP server provides a web address for both the file and the HTML page and avoids security issues.

  * If you are curious about CORS, you can read the [included guide](Activities/06-Ins_Python_HTTP_Server/CORS.md) for more information.

* From the homework directory, run `python -m http.server` in your console/terminal. Navigate to `localhost:8000` to show that files are being served from the server, and no CORS error is returned.

* The file`index.html` must be at the directory where `python -m http.server` is run.

* In `app.js` use the below code to read from the file. D3 sends a request to the route `data/data.json`.

  ```js
  d3.json("data/samples.json").then((data) => {}
  ```
</details>
