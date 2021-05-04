### 16. Students Do: Map Wrap (0:15)

* In this activity, students will be using the OpenWeatherMap library in order to make requests and parse data from the OpenWeatherMap API.

* Before slacking instructions to students for [10-Stu_MapWrap/Stu_MapWrap.ipynb](Solved/Stu_MapWrap.ipynb) show then the [image](../../Images/10-MapWrap_Output.png) below to show them what their application should do.

  ![Map Wrap - Output](../../Images/10-MapWrap_Output.png)

* **Files:**

  * [cities.csv](Resources/cities.csv)

* **Instructions:** [10-Stu_MapWrap/README.md](README.md)

  * Install the Openweathermapy API wrapper.

  * Read in the cities.csv using the Python CSV library in order to create a list of cities.

  * Create a settings dictionary with your API key and the preferred units of measurement.

  * Get data for each city that is listed within `cities.csv`.

  * Create a list to get the temperature, latitude, and longitude in each city.

  * Create a Pandas DataFrame with the results.

  * Print your summaries to verify that everything went smoothly.

* **Hints:**

  * Don't forget to utilize the Openweathermapy documentation where needed: <http://openweathermapy.readthedocs.io/en/latest/>

  * We used the Python CSV library heavily in Week 3.  You can see the documentation for that library at <https://docs.python.org/3.7/library/csv.html>.

* **Bonus:**

  * If you finish early, the `*` syntax should be reviewed.

  * Pass a `columns` parameter to `pd.DataFrame` to provide labels for the temperature and coordinate data.

### 17. Instructor Do: Review Map Wrap (0:05)

* Open up [10-Stu_MapWrap/Stu_MapWrap.ipynb](Solved/Stu_MapWrap.ipynb) within Jupyter Notebook and run through the code with the class line-by-line by having them describe the application.

  * Ask a student to explain how they solved the problem of firing requests for each city in the CSV and compare their response to the `with` block in the solution.

  * Ask a student to explain how they created a list of column labels.

  * Take a moment to explain the use of a list comprehension to generate the DataFrame in a single line.

    ![Map Wrap - Code](../../Images/10-MapWrap_Code.png)
