# Git Pull Workflow

Refer to the following document when interacting with GitHub.

## Pull Reference

The syntax for pull mirrors that of push.

```bash
git pull origin main
```

To pull from GitHub to a branch _other than main_, we simply **checkout** and **specify the branch**.

```bash
git checkout other_branch
git pull origin other_branch
```

To simultaneously pull and merge most recent version of main into the branch you're currently on, simply pull from `origin/main` while on `origin main` _into_ `<other_branch>`.

```bash
git checkout other_branch
git pull origin main
```

This checks out `other_branch`; fetches changes to `main` from GitHub; and then merges them into `other_branch`.

In order to avoid issues with merge conflicts, you should always `git pull` before merging or pushing.

```bash
git checkout main
# Do some work, add, commit

git push origin main
git checkout other_branch
# Do some work, add commit

git checkout main
git pull
git merge other_branch
git push main
```
