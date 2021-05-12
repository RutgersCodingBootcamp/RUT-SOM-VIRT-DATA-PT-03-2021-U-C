# Review Questions

This document contains review questions for Git basics.

## Instructions

### Overview

* **Problem**: Consider the example from the lecture, where we created a branch for our data analysis. Why did we create a new branch for this? Why _not_ simply do this on `master`?

* **Solution**: Doing the work directly on `master` would make it harder to keep that work organized. Branches let us keep our work sandboxed and organized.

* **Problem**: Write two advantages to creating branches instead of working directly on `master`.

* **Solution**:

  1. We can isolate our experiments to a single branch—if we break something on our `data_analysis` branch, we at least know that the code on `master` still works.

  2. We can focus on writing _one_ new feature at a time, instead of having work for a handful of different features and bugfixes in a single branch.

- - -

### Branching

For the problems below, consider the following commit history:

  ```bash
  (master) | [m1] -> [m2] -> [m3] -> [m4]
  ```

* **Problem**: Draw a new branch, called `plotting_data`. It should branch from the second commit to `master`.

* **Solution**:

  ```bash
  (master)        | [m1]-[m2]
                          \
  (plotting_data) |         \-[pd1]-[pd2]
  ```

* **Problem**: When you first create `plotting_data`, are the files on that branch the same as the files in `[m1]`? In `[m2]`? Why, or why not?

* **Solution**

The files on `plotting_data` are the same as the files in `[m2]`.

This is because we created and checked out `plotting_data` while we were on `[m2]`. This means our files will look like they did when we last committed to `[m2]`, but that Git tracks any further changes to files on `plotting_datas`, _not_ `master`.

* **Problem**: Add two commits to the `master` branch.

* **Solution**:

  ```bash
  (master)        | [m1]-[m2]-[m3]-[m4]
                          \
  (plotting_data) |         \-[pd1]-[pd2]
  ```

* **Problem** Add two commits to the `plotting_data` branch, named `[pd1]` and `[pd2]`.

* **Solution**

  ```bash
  (master)        | [m1]-[m2]-[m3]-[m4]
                          \
  (plotting_data) |         \-[pd1]-[pd2]
  ```

* **Problem**: Are the files in `[pd1]` and `[m3]` the same? Why, or why not?

* **Solution**: No. The code in `[pd1]` and `[m3]` are _not_ the same. Any two given branches should contain _different_ work, so `[m3]` probably contains a patch or bugfix totally unrelated to `[pd1]`.

- - -

### Merging

* **Problem**: Merge `[pd2]` with `master`.

* **Solution**:

  ```bash
  (master)        | [m1]-[m2]-[m3]-[m4]- - --[m5]
                          \                /
  (plotting_data) |         \-[pd1]-[pd2]-/
  ```

* **Problem**: Explain how this merge changes the files in `master`.

* **Solution**: `master` now has the most recent changes to `clean_data.py` made on _either_ the `master` or `plotting_data` branch. It will also have the new files add in the `plotting_data` branch.

* **For the problems below, consider the following history.**

  ```bash
  (master)        | [m1]-[m2]-[m3]-[m4]- - -- - -- - -[m5]
                                \               / (M)
  (plotting_data) |              \-[pd1]-[pd2]-/
  ```

  * Assume `[m4]` on `master` updates `clean_data.py`, but doesn't change the directory structure.

  * Assume the root project directory looks as follows at each commit:

    ```bash
    [m4]
    root/
      |_analyze_data.py
      |_clean_data.py
      |_output/
        |_cleanedRideData.csv
      |_Resources/
        |_rideData.csv

    [pd2]
    root/
      |_analyze_data.py
      |_clean_data.py
      |_helpers.py
      |_plot_data.py
      |_output/
        |_cleanedRideData.csv
        |_plots.pdf
      |_Resources/
        |_rideData.csv
    ```

* **Problem**:

  1. When we merge `master` and `plotting_data`, which version of each file do we get?

  2. Draw the directory structure for the last commit to `master`—after the merge—and label each file with the branch it comes from. Assume that the only files changed on `plotting_data` were `helpers.py` and `plot_data.py`.

* **Solution**:

  ```bash
  [m5]
  root/
    |_analyze_data.py (master)
    |_clean_data.py (master)
    |_helpers.py (plot_data)
    |_plot_data.py (plot_data)
    |_output/ (mixed)
      |_cleanedRideData.csv (master)
      |_plots.pdf (plot_data)
    |_Resources/ (master)
      |_rideData.csv
  ```

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
