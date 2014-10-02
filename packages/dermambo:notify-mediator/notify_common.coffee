Meteor.startup ->
  Deps.autorun ->
    args = Mediator.subscribe('show_error')
    Notify.setError(args[1]) if args

@Notify =
  setError: (err) -> # override on server and client