Package.describe({
  summary: "The apps iron router routes"
});

Package.on_use(function (api) {
  var both = ['client', 'server'];

  api.use('coffeescript', 'client');
  api.use('underscore', 'client');

  api.use('iron-router', both);
  
  api.add_files("router.coffee", both);
});