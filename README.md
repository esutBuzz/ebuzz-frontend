# ebuzz-frontend
This is the frontend part of the ebuzz project

## Project outline and collaboration draft

_Project is prototyped using Vite + React_

For the E-BUZZ project collaboration on the frontend of things, these are the stipulations of how the collaboration is to work for the entirety of the frontend part of the project
To ensure effective collaboration and to reduce code redundancy, this would be the ideal file structure so as to maintain a deliberate collaborative standard for operations. So, in the main folder, ie the `src` folder, this would be how the structure would be;

`assets` `components` `pages`

These proper folder formats would contain all the other formats for us to be able to work properly and know where to store things and access files when needed.
All images would be stored in a folder called `images` in the public folder. This would make so that getting images would be easily routed. _All images to be used are to be imported in the `svg` format_

For the static renders that would require us to have multiple things displayed at once, we would have a `Data` folder at the root folder. This would enable us to store all the repetitive data, prevent redundancy, and ensure that the code is little. This is so we can maximise functionality and ensure clean and easily updateable code at all time. This is paramount so we can reduce the amount of repetitive html in the code and ensure those code is not bogus.

### Collaboration details:

For our collaboration methods, we would be doing active deployment with specific commits. This means that our commits would be meaningful, so that it would help reduce redundancy and mitigate commit errors in deployment and during code merging. So, the outline for the updates would be;
For each significant work done, create a branch:

**Note that those using external styling like SASS, should have their stylesheets the same place as their jsx. Then they now import the `App.scss` stylesheet which would be where all the initial styles and calls would be made from**

Let us take for example, you work on the navbar. This is a major feature of the website, so you would write;

```
git branch ft-navbar
```
To make a commit, you would then say
```
git checkout ft-navbar
```
```
git push origin ft-navbar
```
When you are done with pushing, you do
```
git checkout main
```
Instead of `main`, you could have `master` as the head branch of the repository.

Then you go on GitHub and make a pull request to the `main` branch, adding me as a reviewer so I would be able to look at the code before giving my approval for it to be merged to the main branch.

In this same effect, we would have three forms of commit, the `feature` depicted by `ft`, the `fix/bug-fix` depicted by `fx` or `bg-fx` then the `chore` depicted by `ch`
The feature is as exactly as it sounds. It is a feature that is added for the user to use.
The bug fix is as exactly as you see it there, you notice an error in the code, and you fix the error
The chore is just something that enhances code readability and optimises performance. It does nothing for the user, but for the developers.
**NB: these are the prefixes you would attach to the name of the branch. The branch name should contain the name of the thing you worked on, like;**
```
git branch ft-navbar
```
```
git branch fx-navbar
```
```
git branch ch-navbar
```
Those are methods or formats which would be used to ensure proper work is done in the code bases.
Also Note that before you start your part for the day, access the repository, and ensure that your local code base is up to date with the main code base.
Thank you for reading through.

## First-time collaborators

For first-timers, run the commands as so in sequential order, and press enter each time

```
git clone https://github.com/esutBuzz/ebuzz-frontend/
```
To install all dependencies, we do;
```
npm install
```
To start the server, we do;
```
npm run dev
```
## Cheers and happy coding 🍻👩🏾‍💻


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
