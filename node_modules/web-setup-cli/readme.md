# web-setup-cli
When setting up html, css and js files to start a web project, we would typically have to set up the same thing again to help us get started. Instead of copy and pasting files from an old project to the new one, we can set up a new one with just one line from the terminal. This setup uses gulp and browser-sync to help with the development process.

I came across this quote when researching for this project.
>"Command line applications (CLI) are often the core tools for automating tasks, such as deploying production applications, running tests, building reports, migrating data, DevOps, and the list goes on and on. If you find yourself doing the same things over and over again, chances are you can automate those steps with a script and save yourself a lot of time!" - Neal, author of this [article](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs)

## Quick Start Setup
Before that! Let's make sure you have the required tools.
- [node.js](https://nodejs.org/en/)
- gulp & gulp-cli (npm install gulp && npm install gulp-cli)

Make sure you can use npm. Check with `npm --version`

1. With npm, install web-setup-cli into your desired project folder.
`npm install web-setup-cli`

2. Use this command to get started.
`node_modules/.bin/web-setup`

THAT'S IT! but...
You must be wondering, what an ugly command. Well, we can prettify it actually. But that means we need to install the module globally for it to have access to the shell.

1. With npm, install web-setup-cli globally.
`npm install -g web-setup-cli`

2. Use this command to get started.
`web-setup`

Installing it globally means you can use this command freely in different project folders. Personally, I do not like to have too many global modules unless it is really a module I use often. You can always uninstall the module globally anyway.
`npm uninstall -g web-setup-cli`

Running the commands above help create the folder structure. Finish off the setup process with `gulp`. The command `gulp` has the same concept as `web-setup`. If you didn't install it globally, you will need to referenced it through 'node_modules'.

**`web-setup` is the only command for this module.**

## What is this and what is included
This is just a one-off command to setup folders and files for a web project. It automatically generates an index.html entry point, an empty js file and a minimum main.scss file. The command also pulls Boostrap and jQuery from the npm registry to be included in the project.

After the one-off command, you can start developing by editing the files in src folder.
- The html file can be divided into partials so avoid repeating code in multiple html files. For the initial setup, there are header, head, footer and scripts partials.
Boostrap and jQuery have been referenced accordingly in the header and footer file.
- The scss file is the sass file that will be compiled into main.css file in dest folder. There is also a partial scss file for modulation purpose.
- The js file is normal.

## Dependencies
As mentioned in quick start section, you need node for the npm and gulp-cli & gulp for the compilation. However, there is not much thought into making it full-fledged and you can change the code for your desired outcome. This is the list of dependencies where you can remove or change from the manifest (package.json) except 1 and 2.
1. node.js for npm - most likely you cannot change this easily as the code is based on node.js framework
2. gulp-cli - not in the manifest and you can choose not to use gulp (see 5, 6, 7, 8).
3. bootstrap - you can remove bootstrap from the manifest and the index.js where it is referenced.
4. jquery - you can remove bootstrap from the manifest and the index.js where it is referenced.
5. gulp - you can remove this and replace with another tool like grunt but there are dependencies that you should note (see 6, 7, 8).
6. gulp-dart-sass - you can remove this if you do not plan to use gulp or sass.
7. gulp-postcss - you can remove this if you do not plan to use gulp or a css processor.
8. gulp-file-include - you can remove this if you do not plan to use gulp or the partial html files.
9. autoprefixer - you can remove this if you do not need autoprefixers for css.
10. browser-sync - you can remove this if you do not plan to use browser-sync as a tool.

These two files can also be modified or removed for your desired output.
1. gulpfile.js - Note that the gulpfile.js is dependent on gulp, gulp-dart-sass, gulp-postcss, gulp-file-include, autoprefixer and browser-sync.
2. .browserslistrc - Note that autoprefixer checks .browserslistrc to decide the autoprefix rules.

## Status & Maintenance
This is a one-off project and I do not think I will add new feature nor update anything to it unless necessary. The Bootstrap and jQuery referenced in the project are from npm registry and should be the latest whenever either of these have the latest version.

### Footnotes
1. In index.js, there is a part of code (to copy folders) where I referenced from a stackoverflow answer. Thanks to Simon Zyx [page found here](https://stackoverflow.com/questions/13786160/copy-folder-recursively-in-node-js)
2. I created this project partly as a means to break from a rote task I experienced. Another part of the reason is to learn how to create an npm module. The sites I heavily referenced are:
  a. https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages
  b. https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm
  c. https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
  d. https://nodejs.org/api/fs.html
3. Please feel free to fork the code to customize it for your taste. You can also drop me a message for any queries BUT as mentioned before, I do not plan to add or change any feature for this.