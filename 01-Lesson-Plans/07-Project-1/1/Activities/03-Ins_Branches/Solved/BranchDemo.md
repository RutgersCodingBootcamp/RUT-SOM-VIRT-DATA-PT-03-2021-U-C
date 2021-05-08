# Branch Demo

## 0. Getting the Repo

Before we can work with Git, we must either **create a new repository**, or **clone one from GitHub**.

Note that, in the examples below, we use `git status` before every `git commit`. This is a best practice that helps ensure a deliberate commit history. For brevity's sake, this line will be omitted in future files, **but assume we've always run `git status` before any `git commit`**.

### Clone from GitHub

If someone has already shared a repository on GitHub, you can **clone** it to your local machine with \`git.

```bash
# Clone an existing repo.
git clone <repo_url>
# Navigate into newly created repo directory
cd <repo_name>
```

## 1. Add Files

Next, we simply develop as normal, and `commit` our changes whenever we make significant progress.

In general, it's best to **commit early** and **commit often**. Frequent snapshots ensure you'll never be far away from a "last working version".

```bash
# Create a file, called clean_data.py
touch clean_data.py

# Add and commit clean_data.py...
git add clean_data.py
git status
git commit -m "First commit."

# Add cleanup code to clean_data.py...
git add clean_data.py
git status
git commit -m "Clean up provided data."

# Add code to export clean data...Note that `add .` adds
# everything in the current folder
git add .
git status
git commit -m "Export clean data as CSV."
```

## 2. Create Branches

To create a new, isolated development history, we must create **branches**.

```bash
# Create new branch and switch to it
# Long form: `git checkout --branch data_analytics`
git checkout -b data_analytics
```

Alternatively, we can create a branch and then switch to it as two separate steps, though this is uncommon.

```bash
git branch new_branch_name
git checkout new_branch_name
```

Once we've created a new branch, we can develop as normal:

```bash
# Create file to contain data analysis
git add analysis.ipynb
git status
git commit -m "Add Jupyter Notebook for data analysis."

# Add notebook cells summarizing data
git add analysis.ipynb
git status
git commit -m "Add summary tables to Jupyter Notebook."

# Export analyzed data and/or plots
git add .
git commit -m "Export analysis results and save plots as PNG files."
```

### 3. Merge

Once we've developed and tested the changes on our `data_analysis` branch, we can include them in `main` by **merging** the two branches.

```bash
# Move back to main
git checkout main

# Merge changes on data_analysis with code on main
git merge data_analysis

# Delete the data_analysis branch
git branch -d data_analysis
```

**N.b.**, deleting the `data_analysis` branch isn't necessary, but it's best practice to prune unneeded branches.
