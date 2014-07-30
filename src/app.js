/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Market Data',
  icon: 'images/menu_icon.png',
  //subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'FGBL4U.EX',
        subtitle: 'FGBL Sep14'
      }, {
        title: 'TLS.AX',
        subtitle: 'Telstra'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item: ' + e.section + ' ' + e.item);
  });
  menu.show();
});

//main.on('click', 'select', function(e) {
//  var wind = new UI.Window();
//  var textfield = new UI.Text({
//    position: new Vector2(0, 50),
//    size: new Vector2(144, 30),
//    font: 'gothic-24-bold',
//    text: 'Text Anywhere!',
//    textAlign: 'center'
//  });
//  wind.add(textfield);
//  wind.show();
//});

//main.on('click', 'down', function(e) {
//  var card = new UI.Card();
//  card.title('A Card');
//  card.subtitle('Is a Window');
//  card.body('The simplest window type in Pebble.js.');
//  card.show();
//});
