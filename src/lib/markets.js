var markets_to_display = 
  [{
    code: 'AAPL',
    name: 'Apple'
  }, {
    code: 'FGBLU4.EX',
    name: 'Sept 14 Eurobund'
  }, {
    code: 'GOOG',
    name: 'Google'
  }, {
    code: 'TLS.AX',
    name: 'Telstra'
  }];

function markets() {
  var fetch_market_data_url = "http://quiet-oasis-2159.herokuapp.com/pebblecard/code=";
  var main = new UI.Card({
    title: 'Market Data',
    icon: 'images/menu_icon.png',
    //subtitle: time_str,
    body: 'Press SELECT button ->'
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
        }]
      }]
    });
    market_menu.on('select', function(e) {
      card = null;
      console.log('Selected item: ' + e.section + ' ' + e.item);
      if (e.item == 0) {
        //AAPL
        var card = new UI.Card();
        card.title('Apple');
        //card.subtitle('Apple');
        ajax({
          url: fetch_market_url + 'AAPL',
          type: 'json'
        }, function(market_data) {
          console.log('market_data: ' + market_data.last_price);
          card.body('Last: ' + market_data.last_price + '(' + market_data.delta + ')' + '\n' +
                    'Range: ' + market_data.low + ' - ' + market_data.high + '\n' +
                    'Volume: ' + market_data.volume + ' @ ' + market_data.timestamp);
          card.show();
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
        });
      } else if (e.item == 2) {
        // GOOG
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
        });
      }
      //card.show();
    });
    market_menu.show();
  });
};


module.exports = markets;