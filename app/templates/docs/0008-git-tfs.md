# Proposal for Git + TFS integration

## Goal

	  +-----+
	  | TFS |                 +--------+
	  +-+---+    +------------+ GITHUB |
	    |        |            ++--+---++
	    |        |             |  |   |
	    |        |       +------  |   |
	    |        |       |        |   +----+
	    |        |       |        |        |
	  +-+--+     |     +-+---+ +--+--+  +--+--+
	  | IM +-----+     |DEV 1| |DEV 2|  |DEV N|
	  +----+           +-----+ +-----+  +-----+

- **Integration Man (IM):** Synchronization agent o person.

## How we can accomplish this

### Git-TF

> Git-TF is a set of cross-platform, command line tools that facilitate sharing 
> of changes between TFS and Git.
>
> These tools make it easy to clone sources from TFS, fetch updates from TFS, and
> update TFS with changes committed locally in Git.

First we need to get working this project in our machine. For a full description on how to install it, please take a look at [Git-TF](http://gittf.codeplex.com/).

After the installation of [Git-TF](http://gittf.codeplex.com/) you will have an extra console commands which will help in the process of synchronize all the changes between TFS <=> GitHub.

### Basic configurations

#### 1 - Git configurations matters

Before start, please configure your Git with the following setup:

**Do not touch line endings** (Prevent problems between CRLF and LF)

	core.autocrlf = false

**Ignore cases** (TFS is not case sensitive).

	core.ignorecase = true

**User name and email** (Special for git logs and authoring visibility)

	git config --global user.name "Your name"
	git config --global user.email "your email"

**Use a .gitignore for a Visual Studio Project:** (Prevent temporal files handled automatically by VS (Visual Studio))

[Github configurations](https://github.com/github/gitignore/blob/master/VisualStudio.gitignore)

#### 2 - Experiment with TFS if you have never had the chance of use it

I recommend to register a live.com account and create a repository in 
[TFS](https://tfs.visualstudio.com/) so you will be able to understand how
TFS works before connect it with git.

#### 3 - Special cases to keep in mind

1. You will checkin the changes into TFS. This synchronization process 
   doesn't handle the rename of folders by default. Instead you need to do
   something special.

	**IF**
	someone did `git mv` or `git rm; follow by git add;`

	**THEN**
	you will need to do `git tf checkin --renamemode=all`

	For more information type: 	`git tf help checkin`

2. Always use `git tf pull --rebase` when you download the changes from TFS.

3. Remember Git doesn't version empty folder, but TFS does. Just keep it in mind.

   > **Quick Fix:** Create a file with the name *.gitkeep* inside the folder 
   > you want to add to git. It's a standard way to force git to add folders 
   > which at creation time doesn't have any file.

### 4 - Workflow

#### Github commands

                                git fetch
                                git push origin <branch-name>
            +--------+
            | GITHUB |          git checkout -b <branch-name>
            ++--+---++
             |  |   |           git clean -df
       +------  |   |           git reset --hard HEAD
       |        |   +----+      git reset --hard <hash>
       |        |        |
     +-+---+ +--+--+  +--+--+   git cherry-pick <hash>
     |DEV 1| |DEV 2|  |DEV N|
     +-----+ +-----+  +-----+   git rebase <branch-name>

                                git merge <branch-name>

#### TFS + GitHub

     +-----+
     | TFS |   git tf pull --rebase
     +--+--+
        |
        |
        |
        |      git tf checkin
     +--+--+   git tf checkin --renamemode=all
     | GH  |   git tf help
     +-----+

#### TFS + GitHub schema

	 +-----+        +----+
	 | TFS |        | GH |
	 +-----+        +----+
	(master)<------>(master) Local mirror of TFS
	                 |
	                 +-(dev) GitHub master mirror (mainly for integration purpose
	                   |     before finally merge all the changes into master).
	                   |
	                   +-(current) All the devs must branch of it each time
	                       |       they start a new US or bugfix.
	                       |
	                       +--(story/<id-1>/short-description) dev branch
	                       +--(story/<id-2>/short-description) dev branch
	                       +--(story/<id-N>/short-description) dev branch
