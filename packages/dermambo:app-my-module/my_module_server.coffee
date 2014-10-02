Meteor.methods({
  myModuleMethodServer: (arg1) ->
    Mediator.publish('show_error', arg1)
})