# Instructions

* Use the dow.sqlite dataset provided to analyze the average stock prices (average open, average high, average low, average close) for all stocks in the Month of May

* Plot the results as a Pandas or Matplotlib Bar Chart

### Bonus

Calculate the high-low peak-to-peak (PTP) values for `IBM` stock after `2011-05-31`.

* Note: high-low PTP is calculated using `high_price` - `low_price`
* Use a DateTime.date object in the query filter
* Use list comprehension to create a list of dictionaries from the query results
* Create a dataframe from the list of dictionaries
* Use the `boxplot()` method on the dataframe to plot PTP distribution statistics
