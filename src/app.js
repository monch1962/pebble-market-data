/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var ajax = require('ajax');
var UI = require('ui');
var Vector2 = require('vector2');
//var navigator = require('navigator');

function now() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  var time_str = h + ":" + m;  
  return time_str;
}

function ConvertDDToDMS(dd) {
    var deg = dd | 0; // truncate dd to get degrees
    var frac = Math.abs(dd - deg); // get fractional part
    var min = (frac * 60) | 0; // multiply fraction by 60 and truncate
    var sec = (frac * 3600 - min * 60) | 0;
    return deg + "d " + min + "' " + sec + "\"";
}

//var latitude;
//var longitude;

//navigator.geolocation.getCurrentPosition(function(pos) {
//  var coords = pos.coords;
//  latitude = coords.latitude;
//  longitude = coords.longitude;
//  console.log('Latitude:' + latitude +'\n' + 'Longitude: ' + longitude);
//});
                                         
var main = new UI.Card({
  title: 'Market Data',
  icon: 'images/menu_icon.png',
  //subtitle: time_str,
  body: 'Press SELECT button ->' + '\n'// + latitude + ':' + longitude
});

main.show();

main.on('click', 'select', function(e) {
  var market_menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'AAPL',
        subtitle: 'Apple'
      }, {
        title: 'FGBLU4.EX',
        subtitle: 'FGBL Sep14'
      }, {
        title: 'GOOG',
        subtitle: 'Google'
      }, {
        title: 'TLS.AX',
        subtitle: 'Telstra'
      }, {
        title: 'Where am I?'
      }]
    }]
  });
  market_menu.on('select', function(e) {
    //card = null;
    console.log('Selected item: ' + e.section + ' ' + e.item);
    if (e.item == 0) {
      //AAPL
      var card = new UI.Card();
      card.title('Apple');
      //card.subtitle('Apple');
      ajax({
        url: 'http://quiet-oasis-2159.herokuapp.com/marketdata/code=AAPL',
        type: 'json'
      }, function(market_data) {
        console.log('market_data: ' + market_data.last_price);
        card.body('Last: ' + market_data.last_price + '(' + market_data.delta + ')' + '\n' +
                  'Range: ' + market_data.low + ' - ' + market_data.high + '\n' +
                  'Volume: ' + market_data.volume + ' @ ' + market_data.timestamp);
        card.show();
        card = null;
      });
    } else if (e.item == 1) {
      // FGBL4U.EX
      var card = new UI.Card();
      card.title('Sept 14 Eurobund');
      //card.subtitle('FGBL Sep 14');
      ajax({
        url: 'http://quiet-oasis-2159.herokuapp.com/marketdata/code=FGBLU4.EX',
        type: 'json'
      }, function(market_data) {
        console.log('market_data: ' + market_data.last_price);
        card.body('Last: ' + market_data.last_price + '(' + market_data.delta + ')' + '\n' +
                  'Range: ' + market_data.low + ' - ' + market_data.high + '\n' +
                  'Volume: ' + market_data.volume + ' @ ' + market_data.timestamp);
        card.show();
        card = null;
      });
    } else if (e.item == 2) {
      // FGBL4U.EX
      var card = new UI.Card();
      card.title('Google');
      //card.subtitle('FGBL Sep 14');
      ajax({
        url: 'http://quiet-oasis-2159.herokuapp.com/marketdata/code=GOOG',
        type: 'json'
      }, function(market_data) {
        console.log('market_data: ' + market_data.last_price);
        card.body('Last: ' + market_data.last_price + '(' + market_data.delta + ')' + '\n' +
                  'Range: ' + market_data.low + ' - ' + market_data.high + '\n' +
                  'Volume: ' + market_data.volume + ' @ ' + market_data.timestamp);
        card.show();
        card = null;
      });
    } else if (e.item == 3) {
      // TLS
      var card = new UI.Card();
      card.title('Telstra');
      //card.subtitle('Telstra');
      ajax({
        url: 'http://quiet-oasis-2159.herokuapp.com/marketdata/code=TLS.AX',
        type: 'json'
      }, function(market_data) {
        console.log('market_data: ' + market_data);
        card.body('Last: ' + market_data.last_price + '(' + market_data.delta + ')' + '\n' +
                  'Range: ' + market_data.low + ' - ' + market_data.high + '\n' +
                  'Volume: ' + market_data.volume + ' @ ' + market_data.timestamp);
        card.show();
        card = null;
      });
    } else if (e.item == 4) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        var coords = pos.coords;
        var card = new UI.Card();
        var lat_dms = ConvertDDToDMS(coords.latitude);
        var long_dms = ConvertDDToDMS(coords.longitude);
        card.body('Latitude: ' + '\n' +
                  lat_dms + '\n' +
                  'Longitude: ' + '\n'+ 
                  long_dms );
        card.show();
        coords = card = lat_dms = long_dms = null;
      });
    }
  }
                 //card.show();
                );
  market_menu.show();
  market_menu = null;
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
