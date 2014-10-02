Meteor.methods({
  myModuleMethod: (arg1) ->
    Mediator.publish('show_error', arg1)
})