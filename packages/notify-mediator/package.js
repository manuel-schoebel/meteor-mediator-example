Package.describe({
  summary: "Listens to mediators err message and displays an error"
});

Package.on_use(function (api) {
  var both = ['client', 'server'];

  api.use('coffeescript', both);
  api.use('templating', 'client');
  api.use('underscore', 'client');
  api.use('jquery', 'client');
  api.use('deps', both);
  api.use('session', both);

  api.use('mediator', 'client');

  api.add_files('notify_common.coffee', both);

  api.add_files('notify_server.coffee', 'server');

  api.add_files("notify.html", "client");
  api.add_files("notify.coffee", "client");
});