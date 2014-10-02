Mediator =
  channels: {}
  publish: (name) ->
    @channels[name].args = _.toArray(arguments)
    @channels[name].deps.changed()

  subscribe: (name) ->
    unless @channels[name]
      @channels[name] =
        deps: new Deps.Dependency
        args: null

    @channels[name].deps.depend()
    @channels[name].args