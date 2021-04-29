# Fits and Regression

This activity gives students an opportunity to use Scipy to fit data and Matplotlib to display the fit.

## Instructions

* Open [crime.ipynb](Unsolved/crime.ipynb) file and execute the starter code. This starter code will import the dependencies you will need as well as load the FBI CIUS (Crime in the United States 20*) dataset.

* Generate a scatter plot with Matplotlib using the year as the independent (*x*) variable and the violent crime rate as the dependent (*y*) variable.

* Use `stats.linregress` to perform a linear regression with the year as the independent variable (*x*) and the violent crime rate as the dependent variable (*y*).

* Use the information returned by `stats.linregress` to create the equation of a line from the model.

* Calculate the predicted violent crime rate of the linear model using the year as the *x* values.

* Plot the linear model of year versus violent crime rate on top of your scatter plot.

  * **Hint**: Your scatter plot and line plot share the same axis.

  * **Hint**: In order to overlay plots in a notebook, the plots must be in the same code block.

* Repeat the process of generating a scatter plot, calculating the linear regression model, and plotting the regression line over the scatter plot for the following pairs of variables:

  * Year versus murder rate.

  * Year versus aggravated assault.

## Bonus

* Use `pyplot.subplots` from Matplotlib to create a new figure that displays all three pairs of variables on the same plot. For each pair of variables, there should be a scatter plot and a regression line.

  * **Hint**: All three plots share the same x-axis.

* Use the regression lines you created to predict what the violent crime rate, murder rate, and assault rate will be in 20*.


## Hints

* See the documentation for [stats.linregress](https://docs.scipy.org/doc/scipy-0.*.0/reference/generated/scipy.stats.linregress.html).

* Recall that `stats.linregress` returns a slope, called *m*,, and a *y*-intercept, called *b*. These let you define a line for each fit by simply writing: `y-values = m * x-values + b`, for each linear regression you perform.

- - -

© 20* Trilogy Education Services
