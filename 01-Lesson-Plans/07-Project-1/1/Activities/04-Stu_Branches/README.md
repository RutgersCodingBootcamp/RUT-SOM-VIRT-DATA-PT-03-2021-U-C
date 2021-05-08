# Working with Branches

This activity gives students further experience diagramming branches, and with creating and merging them on the command line.

## Instructions

### Diagramming

Refer to the series of `git` commands your instructor walked through in lecture. Draw a branch diagram describing the commits on `main` and `data_analysis`.

### Practicing Branch Workflows

Next, get some practice working with branches by following these instructions:

1. Create a new directory, and initialize a Git repo inside it.

2. Create a `hello.py` that simply prints `"Hello, World"`.

3. Add and commit your `hello.py`.

4. Create a new branch, called `helpers`.

5. Create a file called `helpers.py`.

6. Inside of `helpers.py`, write a function, called `greet`, that accepts a name and prints: `"Hello, <name>"`. For example, `greet("Jane")` would print: `"Hello, Jane"`.

7. Add and commit your changes.

8. Inside of `hello.py`, import `greet` from `helpers.py`, and use it print `"Hello, World"`.

9. Move back to your `main` branch.

10. Merge `main` with your `helpers` branch.

11. Delete your `helpers` branch.
