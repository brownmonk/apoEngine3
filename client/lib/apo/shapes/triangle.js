define([], function () {
  return function(startState){
    var anyTriangle = $$(
        {
          model:{
            type:'triangle',
            state:0,
            img: 'images/tri-up-red.png',
            imgs: ['images/tri-up-red.png','images/tri-up-orange.png','images/tri-up-yellow.png'],
            on: true
          },
          view: {
            format: '<div id="triangle">' +
                '<img data-bind="src=img"  width="100" height="100" usemap="#tri-up-map" />' +
                '<map name="tri-up-map" id="tri-up-map">' +
                '<area id="tri-area"  shape="poly" coords="94,88,49,12,5,88" style="outline:none;"/>' +
                '</map>' +
                '</div>'
          },
          controller: {
            //When state changes, keep the img property lined up with the correct str from imgs[]
            'change:state': function() {
              console.log('change:state');
              console.log(arguments);

              var self = this;
              var state = self.model.get('state');
              var imgs = self.model.get('imgs');

              if(imgs.length <= state || state < 0){
                //invalid state, revert to 0
                self.model.set({state:0});
              }
              else{
                var img_str = imgs[state];
                self.model.set({img : img_str});
              }
            }
          }
        }
    )


    var clickTriangle = $$(anyTriangle,
        {
          model:{},
          view: {},
          controller:{
            'click #tri-area': function(e) {
              console.log('click #tri-area');
              console.log(arguments);
              console.log(e);
              var self = this;
              var state = self.model.get('state');
              state++;
              self.model.set({state:state});
            }
          }
        })

    var newTriangle = $$(clickTriangle);
    newTriangle.model.set({state:startState});
    return newTriangle;
  }

});