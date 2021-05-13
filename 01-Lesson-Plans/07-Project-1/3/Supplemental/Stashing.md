# Stashing

This bonus activity exposes students to Git's [stash](https://git-scm.com/docs/git-stash) feature.

## Saving Dirty Work

Sometimes, you'll be asked to fix a high-priority bug while you're busy working on something else.

In this situation, you're likely to have made progress you want to keep track of, as well as changes you're not _quite_ ready to commit to...But, which you don't want to throw away.

Git provides the [stash](https://git-scm.com/docs/git-stash) command for just this purpose.

## Using Stash

When you run `git stash`, Git saves your work _exactly_ as it is, and resets your **working copy** (i.e., your version of the the files in your repo) to reflect the commit _before_ `stash`.

Importantly, **stash does not add a commit to your Git history**, so it lets you keep track of your work _and_ maintain a readable project history.

Read [Atlassian's article on git stash](https://www.atlassian.com/git/tutorials/git-stash#stashing-your-work) before moving on.

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
