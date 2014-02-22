Package.describe({
  summary: "Some example package or module or something that has logic"
});

Package.on_use(function (api) {
  var both = ['client', 'server'];

  api.use('coffeescript', both);
  api.use('deps', both);
  api.use('mediator', both);

  api.use('templating', 'client');
  api.use('handlebars', 'client');
  api.use('underscore', 'client');

  api.add_files('my_module_common.coffee', both);

  api.add_files('my_module_server.coffee', 'server');
  api.add_files("my_module.html", "client");
  api.add_files("my_module.coffee", "client");
});