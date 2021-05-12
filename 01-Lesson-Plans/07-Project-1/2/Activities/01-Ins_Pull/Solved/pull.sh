# The syntax for pull mirrors that of push
git pull origin main

# To pull from GitHub to a different branch, we simply specify the branch
git checkout other_branch
git pull origin other_branch

# Merge most recent version of main into other_branch
git checkout other_branch
git pull origin main
