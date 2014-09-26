angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicPlatform, $ionicPopup, FlightDataService, $ionicModal) {
       // alert('in dash controler');

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope,
            focusFirstInput: true,
            animation: 'slide-in-right'

        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.showDisclaimer = function (str) {
            var alertPopup = $ionicPopup.alert({
                title: '<h1>Disclaimer</h1>',
                template: str,
                okText: "<b>Accept Disclaimer</b>"
            });
        }
        $scope.data = { "airlines" : [], "search" : '' };


        $scope.search = ionic.debounce(function() {
            FlightDataService.searchAirlines($scope.data.search).then(
                function(matches) {
                    $scope.data.airlines = matches;
                }
            )}, 300);

        /*
        $ionicPlatform.ready(function () {
            var disclaimerAccepted = window.localStorage['asdf'];
            if (!disclaimerAccepted) {
                $scope.showDisclaimer('from ionicPlatform.ready()');
            }
           // alert('platform ready: ' + window.localStorage['asdf']);

        });

        ionic.Platform.ready(function () {
            var disclaimerAccepted = window.localStorage['sdf'];
            if (!disclaimerAccepted) {
                $scope.showDisclaimer('from ionic.Plaform.ready()');
            }
            //alert('platform ready: ' + window.localStorage['sdfY');

        });
*/

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
