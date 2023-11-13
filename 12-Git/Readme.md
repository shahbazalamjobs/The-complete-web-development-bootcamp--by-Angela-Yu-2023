### Git Basic Use

1. initialiste git local repo: `git init`
2. add file to staging area: `git add filename`
3. check file status tracked or in stagin area: `git status`
4. commit the staged files: `git commit -m "Message in present tense"`
5. to check all commits: `git log`
6. to bring the changed file back to early commit: `git checkout`
7. differences between the current state of file.txt in your working directory and the last committed version : `git diff file.txt `
8. adding a remote named "origin" to your local Git repository : `git remote add origin https://github.com/a/b.git`
9. Git to push the local "main" branch to the "main" : `git push -u origin main`


---

![image](https://github.com/shahbazalamjobs/The-complete-web-development-bootcamp--by-Angela-Yu-2023/assets/125631878/118df5ca-b030-42a6-8a3c-2cf231ce43fb)

### Git 
- Git is a version control system that tracks changes in your code.
- It helps you collaborate with a team, undo mistakes, and manage different project versions.
- With commands like git add, git commit, and git push, you can control, save, and share your code efficiently.
- It's like a time machine for your project, ensuring smooth development and collaboration.

### Version control
- Version control is like having a time machine for your code.
- It allows you to track changes, collaborate with others, and rewind to previous states if things go south.
- Imagine you're working on a project, and you decide to make some changes. Without version control, you might end up with multiple copies of files, confusion about who did what, and the constant fear of messing things up irreversibly.

`Git is used to control repository, track all changes, commit all changes and to perform version control.`

### List of Code

1) `git init`
-  To initialise Git Repository.
-  After running this command, you'll see a hidden folder named .git in your project directory.
-  This folder contains all the information Git needs to manage version control for your project.

2) `git status`
- is like asking Git, "What's going on?" It shows you the current status of your repository—what files have been changed, what's staged for the next commit, and what's not tracked.
- It's your go-to command for a quick snapshot of your project's state.
- It shows untracked file in red text, inside the working directory but not yet at the staging area.
- In order to add them in staging area use `git add`.
- Then it shows red text untracked file in  green color means ready for commit, i.e. tracked file.

3) `git add` 
- `git add`:  -is like saying, "Hey Git, pay attention to these changes!"
- It stages modifications or new files, preparing them for the next commit.
- It's the first step to tell Git which changes you want to include in your project's history.
- `git add .` : Adding all files in staging area in directory. 

4) `git status`
- git add is like telling Git, "Hey, pay attention to these changes!" It stages your modifications or new files, getting them ready for the next commit.
- It's the first step before locking in your changes with git commit.
- You can use it to selectively choose which changes you want to include in the next commit.
  
5) `git commit -m "Complete chapter 1"`
- git commit is like sealing an envelope with your changes.
- After using git add to stage what you want to include, git commit packages those changes into a commit—a snapshot of your project at that moment.
- You also get to leave a note (commit message) explaining what you did in present tense.
- It's like saving a checkpoint in your project's history.

6) `git log`
- `git log` is your project's history book.
- It shows a chronological list of all the commits made, who made them, when, and the accompanying commit messages.
- It's a quick way to see the journey your code has taken over time.

7) Working Directory and local repository.
-  The working directory is where you actively make changes, and the local repository is where Git keeps track of the history of those changes

8) `git checkout`
- `git checkout` is like changing the lens through which you view your project.
- Whether you want to explore a different branch, time-travel to a previous commit, or create a new branch to try out something new, `git checkout` helps you navigate the different snapshots of your code's journey.
- It's your tool for exploring and experimenting within your project's history.
- Code : `git checkout <commit_hash_or_branch_name> -- <file_path>`

9) `git diff file.txt`: 
- `git diff file.txt`: shows the differences between the current state of `file.txt` in your working directory and the last committed version.
- It's a quick way to see what changes you've made locally.

10) `git remote add origin https://github.com/shahbazalamjobs/Story.git`
- Looks like you're adding a remote named "origin" to your local Git repository. This remote points to the GitHub repository at the specified URL.
-  Once you've set this up, you can use "origin" as a shorthand reference for this remote repository when interacting with Git commands, like pushing or pulling changes.

11) `git push -u origin main`
- This command tells Git to push the local "main" branch to the "main" branch on the remote repository named "origin."
- If you have a different branch name locally, replace "main" with the actual name of your branch: master -> main : `git branch -m master main`

12)  a
