h1. Card :: Keeper

This application is used to keep track of your Magic: The Gathering inventory. This application offers:

* Search capabilities for any card in MTG.
* Storage options for keeping cards and counts that you own.
* Previews for the card, including images and metadata.

h2. How to use?

If you are building from source, you need to clone and install:

bc. > git clone http://github.com/navx2810/card-keeper.git
> cd card-keeper && npm i


Alternatively, if you have another package manager, like "yarn":https://yarnpkg.com, you could install it like so:


bc. > git clone http://github.com/navx2810/card-keeper.git
> cd card-keeper && yarn


h2. Commands

You can view the commands in the "package.json":./package.json file


- dev := Spins up the development server and starts listening for changes.
- app := Launches electron and hook into the development server's output.
- dist | dist:[win, mac, linux] := Bundles the application into the dist directory under the app folder.
- cards := Creates the card database.

h2. Version / Release Information

I plan to keep the "milestones":https://github.com/navx2810/card-keeper/milestones section up-to-date with features and plans for each version.

I highly recommend checking out the "issues":https://github.com/navx2810/card-keeper/issues section to comment or post on any problems, feature requests or ideas you think should be added. 

h2. Technology Used

h3. Front End

- "Vue.js":https://vuejs.org/ := a front-end library to assist in creating user-interfaces.
- "Stylus":http://stylus-lang.com/ := a css library for writing simplified css syntax. (looks a lot like jade)
- "Superagent":https://github.com/visionmedia/superagent := an Ajax library that has a more fluent API than XMLHttpRequest.

h3. Back End

- "Better-SQLite3":https://github.com/JoshuaWise/better-sqlite3 := a Node.JS SQLite library with synchronous bindings.
- "Electron":https://electron.atom.io/ := a library for wrapping your application in a light-weight chromium build and serving it as an executable for Mac, Windows, or Linux systems.

h3. Development

- "Webpack":https://webpack.github.io/ := a utility for building code into a single distributable file for web.
- "Babel":https://babeljs.io/ := a "_transpiler_" which accepts ES6 syntax and translates to ES5 code for full browser support.
- "NodeJS":https://nodejs.org := the back-end language used by the server/electron application.