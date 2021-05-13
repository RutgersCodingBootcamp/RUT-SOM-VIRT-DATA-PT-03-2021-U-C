# Merge Conflicts

This activity allows students to practice resolving merge conflicts. **This activity must be completed in succession with previous one**—it cannot stand alone.

## Instructions

* Each member of the team should verify they are in the project repository, and then checkout `main`.

* Before proceeding, each member of the team should pull the latest version of `main` from GitHub.

* _One_ member of the team should change content in `data_analysis.py`, and immediately add; commit; and push the change.

  * Other team members **should _not_ pull from GitHub**, yet.

* Each _other_ member of the team should find _the same lines of code_ in `data_analysis.py`, and change them to something different. 

  * **Note**: The team member who made the initial push to `main` need not do anything for this step.

  * Be sure to add and commit the change before proceeding.

* After committing changes, each member of the team should push to GitHub.

* Attempting to push should produce an error: Take a minute to discuss it with your teammates.

  * Be sure to discuss _what caused the error_, and _how to fix it_.

* As a team, take **5 minutes** to discuss ways to deal with conflicts like this.

  * Usually, it's pretty easy to resolve merge conflicts. Typically, one of the options will be something you already know you don't want; is obviously wrong; etc.

  * On the other hand, when different people change the same lines of a codebase in different ways, each is sure to have a reason in favor of their version.

  * As a team, can you think of a process for preventing this kind of problem?

* Each team member should now **manually resolve the merge conflict**.

  * Each team member should open `data_analysis.py`, and keep the version the team agreed upon.

  * **Do not push to GitHub**.
