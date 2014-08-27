//
// To-Do example
// You can replace this file with any of the examples from agilityjs.com...
// ... they work right out of the box!
//

//
// Item prototype
//
var item = $$({}, '<li><span data-bind="content"/> <button>x</button></li>', '& span { cursor:pointer; }', {
  'click span': function(){
    var input = prompt('Edit to-do item:', this.model.get('content'));
    if (!input) return;
    this.model.set({content:input});
  },
  'click button': function(){
    this.destroy();
  }
});

//
// List of items
//
var list = $$({}, '<div> <button id="new">New item</button> <ul></ul> </div>', {
  'click #new': function(){
    var newItem = $$(item, {content:'Click to edit'});
    this.append(newItem, 'ul'); // add to container, appending at <ul>
  }
});


var obj = $$(
    {
      model:{
              msg:"I've not been clicked",
              counter:0
            },
      view: {
        format:'<div>\
                <div id="hello" data-bind="msg"></div>\
                <div id="world">World</div>\
                </div>',
        style:'& { border:5px solid green; color:white; }\
               & div { padding:10px 20px; }\
               & #hello { background:blue; }\
               & #world { background:red; }'
            },
      controller:{
        'click #world': function() {
          this.model.set({msg:"world clicked"});
        },
        'click &': function() {

          var self = this;
          setTimeout(function(){
            var counter = self.model.get('counter');
            self.model.set({msg:'global clicked ' + counter});
            counter++;
            self.model.set({counter:counter});
          }, 1000);
        }
      }
    });


var stocksheet = $$(
    {
      model:{
        '0:0':{
          type:'card',
          card:{
            color:'red',
            on:true
          }
        },
        '0:1':{
          type:'card',
          card:{
            color:'orange',
            on:true
          }
        },
        '0:2':{
          type:'card',
          card:{
            color:'red',
            on:false
          }
        },
        '0:3':{
          type:'card',
          card:{
            color:'orange',
            on:false
          }
        }
      },
      view: {
        format:'<div></div>',
        style:'& { border:5px solid green; color:white; }\
               & div { padding:10px 20px; }\
               & #hello { background:blue; }\
               & #world { background:red; }'
      },
      controller:{
        'click #world': function() {
          this.model.set({msg:"world clicked"});
        },
        'click &': function() {
          var self = this;
          setTimeout(function(){
            var counter = self.model.get('counter');
            self.model.set({msg:'global clicked ' + counter});
            counter++;
            self.model.set({counter:counter});
          }, 1000);
        }
      }
    })


var oneCard = $$(
    {
      model:{
          type:'card',
          card:{
            color:'red',
            on:true
          },
          mystyle:'background:red;'
      },
      view: {
        format:'<div id="card" data-bind="style=mystyle"></div>',
        style:'& { border:5px solid black;}\
               & { width:50px; height:80px }'
      },
      controller:{
        'click &': function() {
          console.log('click &');
          var self = this;
          var card = self.model.get(self.model.get('type'));
          console.log(card);

        }
      }
    })


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
                    '<area id="cir-area"  shape="circle" coords="50, 50, 45" style="outline:none;" target="_self"/>' +
                  '</map>' +
                '</div>'
      },
      controller: {
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
        },
        'click #cir-area': function() {
          console.log('click #cir-area');
          console.log(arguments);
          var self = this;
          var state = self.model.get('state');
          state++;
          self.model.set({state:state});
        }
      }
    }
)





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
                    '<area id="tri-area"  shape="poly" coords="94,88,49,12,5,88" style="outline:none;" target="_self"/>' +
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
        'click #tri-area': function() {
          console.log('click #tri-area');
          console.log(arguments);
          var self = this;
          var state = self.model.get('state');
          state++;
          self.model.set({state:state});
        }
      }
    })


$$.document.append(clickTriangle);
$$.document.append(circle);


//$$.document.append(oneCard);

//$$.document.append(obj);
//$$.document.append(list);
