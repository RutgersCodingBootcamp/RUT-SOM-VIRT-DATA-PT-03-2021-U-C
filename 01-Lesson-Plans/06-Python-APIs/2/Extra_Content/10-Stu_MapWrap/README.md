# OpenWeather API Wrapper

This activity demonstrates the additional ease of use afforded by API wrappers.

## Instructions

* If it's not running already, start your virtual environment.
  - On Windows, for example: `activate PythonData`
  - And on Apple:  `source activate PythonData`

* Install the openweathermapy API wrapper.
  - From the command line, run: `pip install openweathermapy`

* Following the comments in your Jupyter Notebook:
  - Create a settings object with your API key and preferred units of measurement.

  - Get data for each city that is listed within `cities.csv` in the `Resources` folder.

  - Create a list to get the temperature, latitude, and longitude in each city

  - Create a Pandas DataFrame with the results.

  - Print your summaries to verify that everything went smoothly.

Hint: Don't forget to utilize the [openweathermapy documentation](http://openweathermapy.readthedocs.io/en/latest/).

## Bonus:

* If you finish early, read about and experiment with the `*` syntax.

* Pass a `columns` keyword argument to `pd.DataFrame`, and provide labels for the temperature and coordinate data.

### Note: Don't forget to change the API key in config.py!
