# Effective bower usage for beginners

## What do I need to do in my reusable project?

**Bower only supports [SEMVER](http://semver.org/spec/v2.0.0.html) using git tags (to make it works correctly).**

### Tag your releases (using non-annotated approach)

`git tag -a 0.2.0 09c677c76e -m 'v0.2.0'`

`git tag -a 0.3.0 -m 'v0.3.0 using HEAD as hash'`

> Always use [SEMVER](http://semver.org/spec/v2.0.0.html) as tag format 
> because `bower install` only handle versioning in that way.

> **BAD:** `git tag -a latest -m 'latest stable version'`

> **GOOD:** `git tag -a 0.3.0 -m 'yeah! semver tagging!'`

### Upload all the tags to origin

`git push origin --tags`

### Remove a tag

- If we need to delete any we should remove it locally:

`git tag -d <tag>`

- Delete it remotely:

`git push origin :refs/tags/<tag>`

> NOTE: Delete a tag is OK if you have never made it public. Once you make it
> public you need to keep it for the rest of the project life.

### List available releases (tags).

`git ls-remote --tags <repo-url>`

## When do I need to tag my reusable project?

Each time you make changes to the project, we will need to create a new 
tag pointing to the last commit we are interested to be available for 
everyone.

The suggested schema is: keep `master` as the branch where all the tag are
applied. Create as many branches as you need for development but at the end 
it's important to finally integrate the changes into master plus tag the last
commit.

## What I need to do in my root project?

1. Before installing an updated version of a library, we need to clean the bower 
   cache:

    `bower cache-clean`

   that will save you from having strange errors with new tags.
   
2. Update your `bower.json` using `bower install <repo-url>#semver-tag --save`

