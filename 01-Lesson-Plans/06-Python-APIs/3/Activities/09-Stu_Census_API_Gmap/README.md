# Census Activity

In this activity we will utilize the Census API in order to obtain census data at a state level.

## Instructions

* Using [Census_States.ipynb](Unsolved/Census_States.ipynb) as a reference, create a completely new script that calculates each of the following fields at the **state** level:

  1. Population

  2. Median Age

  3. Household Income

  4. Per Capita Income

  5. Poverty Count

  6. Poverty Rate

  7. Unemployment Rate

* Save the resulting data as a csv.

* Next, read in the provided csv containing state centroid coordinates and merge this data with your original census data.

* With the coordinates now appended to the dataframe, you have the ability to add markers to the base map.

  * Use the 'Poverty Rate' column to create an `info_box` corresponding to each marker.

  ![10-State_Markers.png](Images/10-State_Markers.png)

* **Hints**

  * See documentation for the [Census API Wrapper](https://github.com/datamade/census).

  * See documentation for [Jupyter gmaps](http://jupyter-gmaps.readthedocs.io/en/latest/tutorial.html) for more information on how to create an `info_box`.

  Data Source: [US Census Bureau](https://www.census.gov/developers/).
