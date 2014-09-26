angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicPlatform, $ionicPopup, StockDataService, $ionicModal) {
       // alert('in dash controler');



        $scope.data = { "stocks" : [], "search" : '' };


        $scope.search = ionic.debounce(function() {
            StockDataService.searchStocks($scope.data.search.toUpperCase()).then(
                function(matches) {
                    $scope.data.stocks = matches;
                }
            )}, 300);

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope,
            focusFirstInput: true,
            animation: 'slide-in-right'

        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.selectStock = function (symbol, quandlCode) {
            console.log('symbol = ' + symbol);
            console.log('quandlCode = ' + quandlCode);
            $scope.data.search = null;
            $scope.data.stocks = null;
            $scope.stock = symbol;
            $scope.quandlCode = quandlCode;
            $scope.modal.hide();
        }

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
