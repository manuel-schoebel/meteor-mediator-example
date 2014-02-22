Package.describe({
  summary: "Mediator where you can subscribe to messages"
});

Package.on_use(function (api) {
  var both = ["client", "server"];
  
  api.use('coffeescript', both);
  api.use('deps', 'client');
  
  api.use('underscore', 'client');

  
  api.add_files("mediator.coffee", both);

  api.export('Mediator');
});