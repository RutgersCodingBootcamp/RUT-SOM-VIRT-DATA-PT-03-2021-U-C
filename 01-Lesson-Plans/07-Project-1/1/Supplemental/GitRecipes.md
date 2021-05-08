# Branching Recipes

## Initialize Repository

To initialize a Git repo from the command line:

```
git init
```

## Display All Branches

To display all branches:

```
git branch
```

## Display All Branches, with Metainformation

To display all branches, including information about the latest commit on each branch.

```
git branch --verbose

# Or, as shorthand
git branch -v
```

## Create a new branch

To create a new branch, but _not_ switch to it:

```
git branch <branch_name>
```

## Move to an Existing Branch

To move to a branch that already exists:

```
git checkout <branch_name>
```

## Create & Checkout New Branch Simultaneously

To create and immediately checkout a new branch:

```
git checkout --branch <branch_name>

# Or, as shorthand
git checkout -b <branch_name>
```

## Add a Remote for Push/Pull

To add a remote to push to/pull from:

```
git remote add <remote_name> <remote_url>
```

For example, to add a GitHub repo called `remote_example` as `origin`, do:

```
git remote add origin github.com/peleke/remote_Example
```

## Merge Branches

To merge a branch into the branch you're currently on:

```
git merge <branch_name>
```

For example, doing:

```
# While on `master`...
git merge new_feature
```

...Will merge the `new_feature` branch into `master`.

## Push to GitHub

To push changes for a branch to GitHub:

```
git push origin <branch_name>
```

To set a default upstream branch, add the `-u` flag. For example, doing this:

```
# While on the `master` branch...
git push -u origin master
```

...Makes it such that we can just write `git push` instead of `git push origin master`.

## Aliases

**Aliases** allow you to give your own names to various Git commands, which allows us to save typing.

```bash
# Run the following to install common aliases

git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

This allows us to write `git ci -m "First"` instead of `git commit -m "First"`.

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
