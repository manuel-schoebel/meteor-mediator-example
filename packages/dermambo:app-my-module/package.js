Package.describe({
  summary: "Some example package or module or something that has logic"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('coffeescript');
  api.use('deps');
  api.use('dermambo:mediator');
  api.use('templating', 'client');
  api.use('handlebars', 'client');
  api.use('underscore', 'client');
  api.add_files('my_module_common.coffee');
  api.add_files('my_module_server.coffee', 'server');
  api.add_files("my_module.html", "client");
  api.add_files("my_module.coffee", "client");
});
