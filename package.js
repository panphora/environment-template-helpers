Package.describe({
  name: 'panphora:environment-template-helpers',
  version: '0.0.2',
  summary: 'Use template helpers to determine if you are in development or production',
  git: 'https://github.com/panphora/environment-template-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('templating', 'client');
  api.addFiles('server/environment-template-helpers.js', 'server');
  api.addFiles('client/environment-template-helpers.js', 'client');
});