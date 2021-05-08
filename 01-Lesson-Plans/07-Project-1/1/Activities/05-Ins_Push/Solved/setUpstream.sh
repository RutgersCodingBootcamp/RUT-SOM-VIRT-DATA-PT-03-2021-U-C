# Switch to main
git checkout main

# Set origin/main as the default branch to push to
# when on main
git push origin main -u

# Now, when we're on main, this is the same as:
# 'git push origin main'
git push

# Switch to push_example
git checkout push_example

# Set origin/push_example as the default branch to push to
# when on push_example
git push -u origin push_example

# Now, when we're on push_example, this is the same as:
# git push origin push_example
git push
