define([], function(){
  return function(moduleOptions) {
    var Apo = window.Apo;
    var $ = Apo.$;
    
    // View TODO generate a unique id for each module
    this.view = moduleOptions.view;
    
    // Model
    this.model = moduleOptions.model;
    
    // Controls
    this.control = moduleOptions.control;
    
    // channels
    //TODO: Generate channel name based on module
    this.channel = { default: new Apo.factory.Channel( {channelName: 'myModuleChannel'} ) };
    
    // Bind the data to the element - retrievable with $.data(element, "key")
    $.data(this, "model", this.model);
    $.data(this, "control", this.control);

    return this;
  }
});