var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui',
  summary : 'Semantic (official): a UI component framework based around useful principles from natural language.',
  version : '{package-version}',
  git     : 'git://github.com/Semantic-Org/Semantic-UI.git',
  readme  : 'https://github.com/Semantic-Org/Semantic-UI/blob/master/meteor/README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([ {package-files} ], where);
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'http',
    'semantic:ui'
  ], where);

  api.addFiles([
    'test/meteor/fonts.js',
    'test/meteor/assets.js',
  ], where);
});