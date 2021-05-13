# Conflicts

This document demonstrates **merge conflicts in Git**. 

For the sake of this demo, we'll start by creating a new repo:

```bash
mkdir conflicts_example
cd conflicts_example
git init
```

...And then develop as normal:

```bash
# Create, add, and commit a data_analysis.py
git touch data_analysis.py
# Edit data_analysis.py...
git add data_analysis.py
git commit -m 'Initial commit.'
```

Next, we'll create a new branch, and update the same file we were working on in `main`.

```bash
# Create and checkout a new branch, and add an import
# in the Python code: `import os` will do.
git checkout -b add_os
# Edit data_analysis.py...
git add data_analysis.py
git commit -m 'Add os to project'
```

```bash
# Next, checkout main, and add another import: `import sys` will work.
git checkout main
# Edit data_analysis.py...
git add data_analysis.py
git commit -m 'Add sys to project'
```

At this point, we've made _different_ changes to the _same_ lines of the _same_ file in each of our branches. In cases like this, it isn't clear which version Git should keep when we try to `merge`. This results in a **merge conflict**, which is Git's way of telling us that we need to tell it which version of the code to keep.

```
# Try to merge the two branches--conflict!
git merge add_os
```
