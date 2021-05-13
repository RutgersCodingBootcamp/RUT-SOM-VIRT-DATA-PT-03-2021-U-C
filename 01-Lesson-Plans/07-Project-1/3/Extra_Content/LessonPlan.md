## 8.3 Lesson Plan - Merge Conflicts & Pull Requests

### Overview

In today's lesson, students will have an opportunity to practice collaboration by **resolving merge conflicts** and **working with pull requests**.

##### Instructor Priorities

* Students must be able to resolve merge conflicts in their working copy.
* Students must be able to push branches to GitHub.
* Students must be able to open a PR against a given branch.
* Students should be able to use Git's `stash` feature to save "dirty" work.

#### Instructor Notes

* Install the appropriate text editor plugin to help visualize Git histories: [Git History](https://github.com/DonJayamanne/gitHistoryVSCode) in VS Code, [Git Time Machine](https://github.com/pidu/git-timemachine) for Sublime Text, and [git-time-machine](https://atom.io/packages/git-time-machine) for Atom.

* Students should have most of today to work on projects, and the Git activities require group work.

  * To that end, you will slack out today's activities for groups to work through on their own time, for at most the first half of class.

  * You should, however, reserve some time at the beginning of class to **discuss merge conflicts**, using [01-Ins_Merge_Conflits/conflicts.sh](Activities/)01-Ins_Merge_Conflits/conflicts.sh.

* Have your TAs refer to the [TimeTracker](TimeTracker.xlsx) to stay on track.

### Sample Class Video (Highly Recommended)

* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c985acd8-557e-4264-9aae-a8650028e4ee)

- - -

### Class Objectives

* Students will resolve merge conflicts in their working copy.
* Students will push branches to GitHub.
* Students will be able to open a PR against a given branch.
* Students will be able to use Git's stash feature to save "dirty" work.

- - -

### 1. Instructor Do: Merge Conflicts (01:40)

* **Files**

  * [README.md](Activities/02-Stu_Merge_Conflicts/README.md)—merge conflicts activity

  * [README.md](Activities/03-Evr_Pull_Requests/README.md)—PR activity

  * [README.md](Activities/04-Stu_Stash/README.md)—Git stash activity

**Instructions**

* Welcome class, and explain that today's class will again start with Git, but that the remainder is reserved for project work.

* Explain that, today, students will learn about dealing with **merge conflicts**.

* Reminder students that we use branches to isolate the work we do.

* Ask a student to explain when they might create branches during a project.

* Ask students to consider the following scenario: They've just pulled the latest version of `main`, and are about to start adding a search feature to the site.

  * Point out that this would be an ideal time to create a branch, because we will be **Implementing a new feature**.

* Now, tell students to suppose they _finish_ work on the search bar, and ask a student how they might go about incorporating their work into their project.

  * Explain that one way to do this is simply **merge the changes into our the local** `main`, and then push the updates to the `main` branch tracked on GitHub.

* Point out that this solution has at least one immediate problem.

  * Explain that, if one person changes a file for the first time, they will be able to add; commit; and push the change without issue.

  * But, if someone else changes the _same_ file in the _same_ place, but with a _different_ change, **Git can't automatically figure out which version of the file to use**. This is called a **merge conflict**.

  * Don't belabor the details: Simply make sure students understand that, if several people change the same files, Git might not be able to figure out which version should "win".

* Next, explain that you will create and resolve a merge conflict on purpose.

  * Use the comments in [01-Ins_Merge_Conflicts](Activities/01-Ins_Merge_Conflicts) as a guide.

  * Be sure to encourage students to follow along.

* To begin, you'll create a new repo with two branches; and modify the same file on both branches.

  * Create a new directory, and initialize a repo inside of it.

  * Add and commit an `index.html` file.

  * Checkout a new branch.

  * Add Bootstrap to `index.html`, and change the contents of the `title` tag. Add and commit your changes.

  * Switch back to `main`.

  * Change the contents of the `title` tag to something different than you chose in the other branch.

  * Finally, attempt to merge the other branch into `main`.

* When you attempt to merge branches, point out that Git raises an error that students may have seen before: **Automatic merge failed**!

![Automatic merge failed](Images/merge-conflict.png)

* Ask a student to explain _why_  this error occurs.

  * Explain that this error occurred because we chose one title in the new branch, but a _different_ title on `main`.

* Take a moment to have a discussion around this idea.

  * Remind students that, when we tried to merge, each branch had a _different_ page title.

  * But, since there can only ever be _one_ version of any given file in a particular branch...We have to choose just _one_ change to live with on `main`.

  * Point out that, while these titles are different, both changes are _possible_—which we keep is a matter of preference.

  * To put it differently: Either title would work, so there's no way for Git to make a reasonable choice as to which version to keep.

* Explain that, in situations where Git has to make a choice to finish merging branches, but doesn't know how, it

  * First **annotates the conflicting files**, so you can easily find the changes that need to be resolved; then

  * **Notifies the user of the merge conflict**; and, finally,

  * **Lets the user decide which version to keep**

* Open up `index.html`, and point out the extra cruft around the `title` tag.

* Point out that there are two blocks of code, both of which look familiar.

  * Point out that the **upper block** is the code on the branch we're merging _into_—in this case, the **current branch**.

  * Point out that the **bottom block** is the code on the branch _whose changes we're merging_.

  * Explain that Git displays both versions so that _we_ can compare them at a glance, and manually decide which to keep.

* Explain that resolving a conflict is as simple as deleting the code you don't want, and keeping the code you do.

  * Delete the code from the other branch, and keep the code from `main`.

* Optionally,point out that the lower block includes the name of the branch the excerpt came from, while the upper branch is labeled with **HEAD**.

  * Explain that, in Git, **HEAD** refers to the **commit you are currently working on**.

* Point out that we still haven't technically resolved the merge.

  * If you have Git Bash, point out that the command line indicates that we are still `MERGING` branches.

* Explain that, after we've edited the file to our liking, actually resolving the conflict is as simple as simply committing the manually updated file.

![Manually committing the updated file resolves the conflict.](Images/resolving-conflict.png)

* Explain that this resolves the conflict, and that we can now continue branching and developing as before.

* Point out that conflicts like this often come up on teams.

  * Explain that the next set of Git activities are an opportunity to deal with some common such scenarios.

* Explain that students will spend the rest of class working on Git activities, until break at latest, and will have the remainder of the time for project work.

* Slack out the activity instructions listed above, and dismiss class to work on activities.

  * The instructional staff should be sure to check-in with groups to offer support.

- - -

### 2. BREAK (0:40)

- - -

### 3. Everyone Do: Project Work (01:40)

* Students have the remainder of class to work on projects.

  * Instructional staff should be sure to check-in with groups, and be sure that each receives feedback on their progress relative to deadline.

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
