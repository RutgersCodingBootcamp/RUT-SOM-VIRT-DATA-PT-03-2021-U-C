# Dependencies
from random import random
import matplotlib.pyplot as plt
import numpy as np
# https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.sem.html
from scipy.stats import sem

# "Will you vote for a republican in this election?"
sample_size = 100
# Like a nested for-loop, there is a list comprehension nested inside the outer list comprehension
# The inner list comprehension generates a list of True and False values.
# The outer list comprehension generates ten such lists
samples = [[True if random() < 0.5 else False for x in range(0, sample_size)]
           for y in range(0, 10)]
x_axis = np.arange(0, len(samples), 1)

# Evaluate the mean of each list in samples
means = [np.mean(s) for s in samples]
# Evaluate the standard error measurement for each list in samples
standard_errors = [sem(s) for s in samples]

# Generate an errorbar plot
# The 'yerr' argument refers to the error bar for each sample, oriented to the y-axis
plt.errorbar(
    x_axis,
    means,
    yerr=standard_errors,
    color='r',
    marker='o',
    markersize=5,
    linestyle='dashed',
    linewidth=0.5)

# Display the plot
plt.show()
