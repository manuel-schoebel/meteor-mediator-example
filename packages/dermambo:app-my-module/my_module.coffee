msg = 'There is something wrong'

Template.myModule.events({
  'click .show-err-both': (evt, tpl) ->
    Meteor.call('myModuleMethod', msg)
  'click .show-err-client': (evt, tpl) ->
    Mediator.publish('show_error', msg)
  'click .show-err-server': (evt, tpl) ->
    Meteor.call('myModuleMethodServer', msg)
})