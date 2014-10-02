Package.describe({
  summary: "Mediator where you can subscribe to messages"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('coffeescript');
  api.use('deps', 'client');
  api.use('underscore', 'client');
  api.add_files("mediator.coffee");
  api.export('Mediator');
});
