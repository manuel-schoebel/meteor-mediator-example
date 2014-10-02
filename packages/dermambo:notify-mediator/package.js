Package.describe({
  summary: "Listens to mediators err message and displays an error"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('coffeescript');
  api.use('templating', 'client');
  api.use('underscore', 'client');
  api.use('jquery', 'client');
  api.use('deps');
  api.use('session');
  api.use('dermambo:mediator', 'client');
  api.add_files('notify_common.coffee');
  api.add_files('notify_server.coffee', 'server');
  api.add_files("notify.html", "client");
  api.add_files("notify.coffee", "client");
});
