angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('FlightDataService', function($q, $timeout) {


    var searchAirlines = function(searchFilter) {

        console.log('Searching airlines for ' + searchFilter);

        var deferred = $q.defer();
        // if (searchFilter) {
        console.log ('has search value');
        if (searchFilter) {
            // searchFilter = 'asdfsadfsadfsdfsafd';
            var matches = airlines.filter(function (airline) {
                //if(airline.Ticker.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;
                return  airline.Ticker.substring(0, searchFilter.length) === searchFilter;
                //return  airline.Ticker === searchFilter;
                //return  airline.substring( 0, searchFilter.length).toLowerCase() === searchFilter.toLowerCase();
            })
            //console.log(matches);
            /*
             var matches = [];
             for (i = 0; i < airlines.length; i++) {
             if (airlines[i].Ticker.substring( 0, searchFilter.length) === searchFilter)
             matches.push(airlines[i]);

             }
             return matches;
             */
        }
        else {
            matches = [];
        }


        $timeout( function(){
            console.log("in timeeout");
            deferred.resolve( matches.splice(0,10) );

        }, 100);


        return deferred.promise;

    };

    return {

        searchAirlines : searchAirlines

    }
})
