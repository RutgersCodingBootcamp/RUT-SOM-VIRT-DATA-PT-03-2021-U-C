# Collaborating With Pull Requests

This activity allows students to practice opening, discussing, and resolving **pull requests** as a team.

## Instructions

* Pushing to GitHub immediately after resolving the merge conflict in `data_analysis.py` leads to a problem.

  * The first person to push changes will be successful, because Git will see that they resolved the merge conflicts in their latest commit.

  * However, everyone who tries to push _after_ this will receive an error.

* Before moving on, take **5 minutes** to verify that everyone can articulate why this error would arise.

  * If _each_ member of the team resolved the merge conflict _differently_, you will ultimately run into the same problem we ran into when one person committed a change to `data_analysis.py` before anyone else, and the rest of the team had to "take turns" updating `main`.

* In situations where _different_ people might be developing the _same_ file, a popular solution is to **communicate via PR**.

* Each team member should navigate to the GitHub page for the repo, and open a PR for their branch.

* After opening the PR, _slack the link to your teammates_ and _let them know you need it reviewed before you can move on_.

* After opening up your PR, switch back to the `main` branch.

* When working on a real issue, the next step would be for everyone to _review each other's code_, and _discuss the best solution_. For today, pretend you've done this, and choose an arbitrary title to keep.

  * Next, one member of the team should find the PR containing the version the team agreed upon, and merge it into `main`.

* After merging the selected PR, delete the others.

  * This isn't strictly necessary, but does help keep things tidy.

* After the repo has been updated, everyone on the team should pull the changes.

  * Verify that contents of `data_analysis.py` look as expected.

## Bonuses

* After merging the agreed-upon changes into `main` via GitHub, you deleted the other PRs on GitHub.

  * After resolving this issue as a team, there's no need to do any work on the branches you initially created.

  * [Delete the branch(es)](https://www.atlassian.com/git/tutorials/using-branches) you no longer need.

  * Like deleting PRs, deleting branches isn't necessary, but it's best practice to keep your Git environment tidy.
