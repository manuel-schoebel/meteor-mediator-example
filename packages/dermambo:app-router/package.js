Package.describe({
  summary: "The iron router routes of this specific app"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('coffeescript', 'client');
  api.use('underscore', 'client');
  api.use('iron:router');
  api.add_files("router.coffee");
});
