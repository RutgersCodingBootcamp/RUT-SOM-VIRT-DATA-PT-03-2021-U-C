# Workflow Diagrams

Imagine you're working on a Git project.

So far, you've made three different commits, all on your `main` branch. We'd write this something as follows:

```bash
(main) | [m1] -> [m2] -> [m3]
```

…Where `[m1]` is the first commit on the `main` branch, `[m2]` is the second, etc. The `m` comes from the fact that these commits are on the **m**aster branch.

## Branching

Whenever you want to either _add something new_ or _fix something broken_, you should create a new branch for your work.

Consider the illustration of the `main` branch above. All of the work in the commits `[m1]`, `[m2]`, and `[m3]` happened in sequence: First we did the work in `[m1]`; then the work in `[m2]`; and, finally, the work in `[m3]`.

Let's imagine that we've been working with Uber ride data, and we're interested in finding out whether there's a correlation between a rider's age and the time they request a driver.

Let's say that, in `[m3]`, we've finally managed to use Pandas to massage our data into just the shape we need to start analyzing it. Our next task is to write the Python that actually analyzes this newly well-formed data.

Obviously, this will take a lot of testing and debugging to get right. Since this will take a lot of experimentation, debugging, and discussion with colleagues, it's a good opportunity to create a new branch.

```bash
(main) | [m1]-[m2]-[m3]
                      \
(data_analysis)        \ -> …
```

Note that ellipsis. Those `…` indicate that we've _created_ the `data_analysis` branch, and also **checked it out** (i.e., "moved" to it), but that we haven't actually done any work yet.

Remember: When we create a new branch, the files on the new branch are _the same_ as the files on the branch we were on immediately before. In this case, the files on `data_analysis` are the same as the files in `[m3]`, _until we change and commit something_.

Let's say we finish our analyses of riders' ages—determining the average age of riders in different regions, etc—and decide this is a good point to stop and commit our changes.

```bash
(main) | [m1]-[m2]-[m3]
                      \
(data_analysis)        \ -> [da1]
```

Now, the code on our `[da1]` branch has the cleanup code from `[m3]`, and _also_ the code for analyzing age data. Emphatically, `[m3]` does _not_ have code for analyzing age data.

This is an extremely important concept. Now that we've switched to the `data_analysis` branch, changing files and committing things _will not_ change main, _at all_. Everything we do applies _only_ to `data_analysis`.

## Merging

After we finish analyzing age data, we'll want to update `main` with the new code from `data_analysis`.

The most common way to do this is via [merge](https://git-scm.com/docs/git-merge).

Merging takes the changes you've made on one branch, and integrates them with one another.

So, if we add a `helpers.py` file in the `data_analysis` branch, then merge `data_analysis` with `main`, `main` will also have the most recent version of `helpers.py` you committed.

```bash
(main) | [m1]-[m2]-[m3]--------------[m4]
                      \               / (M)
(data_analysis)        \-[da1]-[da2]-/
```

Now, we've made one more commit to the `data_analysis` branch, in `[da2]`. Then, we **merge** it into main. This means that `[m4]` has all the files from `[m3]`, _plus_ any changes and new files from `[da2]`.

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
