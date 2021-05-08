# Create a git repository somewhere...
# ...Then, track a remote called origin to your local repo
# Skip if you've cloned a repo!
# git remote add origin <repo_url>

# Switch to main
git checkout main

# Now, push the main branch to GitHub
git push origin main

# Create and checkout a new branch
git checkout -b push_example

# Push new branch to GitHub
git push origin push_example

# Switch to main
git checkout main

# After others have pushed their branches to GitHub...
git pull
