
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

3) `git status`
- git add is like telling Git, "Hey, pay attention to these changes!" It stages your modifications or new files, getting them ready for the next commit.
- It's the first step before locking in your changes with git commit.
- You can use it to selectively choose which changes you want to include in the next commit.

4) `git commit -m "Complete chapter 1"`
- git commit is like sealing an envelope with your changes.
- After using git add to stage what you want to include, git commit packages those changes into a commit—a snapshot of your project at that moment.
- You also get to leave a note (commit message) explaining what you did in present tense.
- It's like saving a checkpoint in your project's history.

5) `git log`
- `git log` is your project's history book.
- It shows a chronological list of all the commits made, who made them, when, and the accompanying commit messages.
- It's a quick way to see the journey your code has taken over time.

6)  aa
