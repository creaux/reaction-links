Package.describe({
  name: 'reactioncommerce:alternate-links',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');
  api.use("meteor-base");
  api.use("less");
  api.use("mongo");
  api.use("blaze-html-templates");
  api.use("reactive-dict");

  api.use("reactioncommerce:core@0.12.0");
  api.use("reactioncommerce:reaction-router@1.0.0");

  api.addFiles('server/register.js', 'server');
  api.addFiles('common/global.js', ['server', 'client']);

  api.addFiles('common/collections.js', ['server', 'client']);
  api.addFiles('common/service.js', ['client', 'server']);
  api.addFiles('server/links.js', 'server');
  api.addFiles('client/autorun.js', 'client');
  api.addFiles('client/components/links/links.html', 'client');
  api.addFiles('client/components/links/links.js', 'client');
  api.addFiles('client/components/linkDetail/linkDetail.html', 'client');
  api.addFiles('client/components/linkDetail/linkDetail.js', 'client');
  api.addFiles('client/components/linkEdit/linkEdit.html', 'client');
  api.addFiles('client/components/linkEdit/linkEdit.js', 'client');
  api.addFiles('client/components/linksCollection/linksCollection.html', 'client');
  api.addFiles('client/components/linksCollection/linksCollection.js', 'client');

});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('reaction-alternate-links');
//   api.addFiles('reaction-alternate-links-tests.js');
// });
