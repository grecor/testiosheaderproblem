angular.module('starter.services', [])




    .factory('StockDataService', function($q, $timeout) {


        var searchStocks = function(searchFilter) {

            console.log('Searching stocks for ' + searchFilter);

            var deferred = $q.defer();
            var matches = [];
            if (searchFilter) {

                var tickerMatches = [];
                var nameMatches = [];

                for (var i = 0; i < stocks.length; i++) {
                    var stock = stocks[i];

                    if (stock.Ticker.substring(0, searchFilter.length).toUpperCase() === searchFilter) {
                        tickerMatches.push(stock);
                    }
                    else if (stock.Name.substring(0, searchFilter.length).toUpperCase() === searchFilter) {
                        nameMatches.push(stock);
                    }
                }

                // show the ticker matches first
                matches = tickerMatches.concat(nameMatches);


            }
            else {
                matches = [];
            }


            $timeout( function(){

                console.log(matches.length);
                //console.log(matches);
                deferred.resolve(matches.splice(0,10));
            }, 100);


            return deferred.promise;

        };

        return {

            searchStocks : searchStocks

        }
    })