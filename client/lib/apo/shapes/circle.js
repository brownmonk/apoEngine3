define([], function () {
  return function(startState){
  var circle = $$(
      {
        model: {
          type:'shape',
          state:0,
          img:'images/cir-red.png',
          imgs:['images/cir-red.png', 'images/cir-green.png'],
          on: true
        },
        view: {
          format: '<div id="circle">' +
                    '<img data-bind="src=img"  width="100" height="100" usemap="#cir-map" />' +
                    '<map name="cir-map" id="cir-map">' +
                      '<area id="cir-area"  shape="circle" coords="50, 50, 45"/>' +
                    '</map>' +
                  '</div>'
        },
        controller: {
          'change:state': function() {
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
          },
          'create': function(){
            var self = this;
            var imgs = self.model.get('imgs');
            var state = self.model.get('state');
            if(imgs.length <= state || state < 0){
              var img = imgs[state];
              this.model.set({img:img});
            }
            else{
              this.model.set({state:0});
            }
          },
          'click &': function() {
            var self = this;
            var state = self.model.get('state');
            state++;
            self.model.set({state:state});
          }
        }
      }
  );

  var newCircle = $$(circle);
  newCircle.model.set({state:startState});

  return newCircle;
  }
});
