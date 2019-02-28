// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

let openFiles = [];

module.exports = (on, config) => {

  on(`before:browser:launch`, (browser, args) => {

    setTimeout(() => openFiles.forEach(file => file.emit(`rerun`)), 3000 );

    if (browser.name === `chrome`) {
      return args.concat(`--auto-open-devtools-for-tabs`);
    }
  });

  on(`file:preprocessor`, file => {

    if ( file.shouldWatch && !openFiles.find(f => f.filePath === file.filePath)) {

      openFiles.push(file);

      file.on(`close`, () => {
        openFiles = openFiles.filter(f => f.filePath !== file.filePath);
      });
    }

    return file.filePath;
  });
}
