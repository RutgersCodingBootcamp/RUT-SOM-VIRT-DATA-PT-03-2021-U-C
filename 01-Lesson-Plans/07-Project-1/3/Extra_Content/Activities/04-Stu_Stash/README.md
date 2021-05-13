# Git Stash

This activity allows students to practice using `git stash` to save a "dirty" working copy before switching branches.

## Instructions

* Create a new directory, and initialize a Git repository inside of it.

* Create a `data_analysis.py` file, then add and commit it.

* Create and checkout a new branch.

* Import a module in `data_analysis.py`, such as `os`. Add and commit the change.

* Next, create a function called `plot_twitter_sentiment`. Add a docstring explaining that this function will fetch, analyze, _and_ plot data from Twitter. 

  * Save the file after adding the docstring, but **do not** add and commit the changes.

At this point, your _plan_ is to start filling out the logic for this function..._But_, you also just learned of a more important bug to fix on `main`.

* **Stash your changes**, and checkout main.

* Add a file, called `solution.txt`. Give it whatever contents you'd like, then add and commit the file.

* Check out your other branch. Take a moment to look at the contents of `data_analysis.py`: Note that they do _not_ contain the docstring you defined before switching branches.

* Use stash to **re-apply** the work you had before switching to `main`.

* Check the contents of `data_analysis.py` to make sure everything looks as expected.
