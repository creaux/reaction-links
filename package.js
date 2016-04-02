Package.describe({
  name: 'creaux:reaction-links',
  version: '0.0.2',
  summary: 'Reaction links package for adding custom links into Reaction Commerce.',
  git: 'git@github.com:creaux/reaction-links.git',
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
  api.use("random");

  api.use("reactioncommerce:core@0.11.0");

  api.addFiles('server/register.js', 'server');
  api.addFiles('common/global.js', ['server', 'client']);

  api.addFiles('common/collections.js', ['server', 'client']);
  api.addFiles('common/service.js', ['client', 'server']);
  api.addFiles('server/links.js', 'server');
  api.addFiles('client/templates.html', 'client');
  api.addFiles('client/templates.js', 'client');

});
