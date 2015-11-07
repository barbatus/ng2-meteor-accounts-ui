Package.describe({
  name: 'barbatus:ng2-meteor-accounts-ui',
  version: '0.1.0',
  summary: 'Meteor Accounts UI for Angular2',
  git: 'https://github.com/barbatus/ng2-meteor-accounts-ui',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use([
    'accounts-ui@1.1.6',
    'templating',
    'barbatus:angular2@0.6.6'
  ]);

  api.addFiles([
    'typings/meteor-accounts-ui.d.ts'
  ], 'server');

  api.addFiles([
    'styles.css',
    'accounts_ui.ts',
    'main.ts',
    'system_config.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'sanjo:jasmine@0.18.0',
    'barbatus:ng2-meteor-accounts-ui'
  ]);
});
