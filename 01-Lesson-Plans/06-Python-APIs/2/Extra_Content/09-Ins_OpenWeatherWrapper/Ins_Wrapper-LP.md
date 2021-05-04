### 15. Instructor Do: OpenWeatherMap Wrapper (0:10)

* Open a previous example, such as the [04-Stu_BurundiWeatherApp/Stu_Burundi.ipynb](../../Activities/04-Stu_BurundiWeatherApp/Solved/Stu_Burundi.ipynb) solution, and point out that building query strings and dealing manually with various API configurations, while fairly straightforward, can be cumbersome.

  * On top of this, query strings and other API-specific configurations are not very readable without foreknowledge of the API.

  * Explain that there are often third-party wrappers available for popular APIs which make it easier to work with an API by handling configuration details for the programmer.

* Explain that the wrapper the class will be looking at today wraps the OpenWeatherMap API and is called [openweathermapy](http://openweathermapy.readthedocs.io/en/latest/).

  * Since openweathermapy is a third-party library, students will have to install it using `pip install openweathermapy`.

* Open up [09-Ins_OpenWeatherWrapper/Ins_OpenWeatherWrapper.ipynb](Solved/Ins_OpenWeatherWrapper.ipynb) with Jupyter Notebook to show the class how to use this library.

  * Point out that using this wrapper is much shorter and less cluttered than using the OpenWeatherMap API directly.

  * Before anything else, the library must be imported into the application.

  * Rather than maintaining all of the configuration options, only a `settings` dict is stored which contains the options normally concatenated into the query string.

    ![Weather Wrapper - Config](../../Images/09-WeatherWrap_Config.png)

  * Rather than calling the API and converting the response to JSON manually, the `own.get_current()` method can be used instead. This method takes city name, id, or geographic coordinates, as well as the settings parameters and returns the same response as the API for that city.  For more information, see the documentation: <http://openweathermapy.readthedocs.io/en/latest/#fetch-current-weather-data>.

  * Explain that the `**settings` syntax allows the programmer to pass as many query options as they want to the method.

  * Slack out [this Stack Overflow discussion](http://stackoverflow.com/questions/1769403/understanding-kwargs-in-python) on the syntax for curious students to peruse.

    ![Weather Wrapper - Code](../../Images/09-WeatherWrap_Code.png)

* Openweathermapy also makes it easier to _parse_ responses.

  * Point out that the application is able to isolate the `"temp"` value - nested under `"main"` and `"name"` - without having to traverse the JSON manually.

  * Openweathermapy handles traversals on the user's behalf so long as the application is provided with a list of the keys the user is interested within a `summary` list.

  * The `*summary` extracts each item from the array one by one, rather than sending in the whole list.

    ![Weather Wrapper - Parse](../../Images/09-WeatherWrap_Parse.png)
