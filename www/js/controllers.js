angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicPlatform,$ionicPopup) {
        // $cordovaStatusbar.overlaysWebView(true);

        // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
        // $cordovaStatusbar.style(1);

        // supported names: black, darkGray, lightGray, white, gray, red, green,
        // blue, cyan, yellow, magenta, orange, purple, brown
        //$cordovaStatusbar.styleColor('black');

        //$cordovaStatusbar.styleHex('#000');

        // $cordovaStatusbar.hide();

        //$cordovaStatusbar.show();
        // $cordovaStatusbar.backgroundColorByName('green');
        //StatusBar.backgroundColorByName('green');
        $scope.showDisclaimer = function () {
            var alertPopup = $ionicPopup.alert({
                title: '<h1>Disclaimer</h1>',
                template: 'test',
                okText: "<b>Accept Disclaimer</b>"
            });
            alertPopup.then(function (res) {
                window.localStorage[DISCLAIMER_STRING_KEY] = true;
                console.log('disclaimer popup displayed');

            })
        };
        var DISCLAIMER_STRING_KEY = 'asfd';
        ionic.Platform.ready(function () {
            var disclaimerAccepted = window.localStorage[DISCLAIMER_STRING_KEY];
            if (!disclaimerAccepted) {
                $scope.showDisclaimer();
            }
            alert('platform ready: ' + window.localStorage[DISCLAIMER_STRING_KEY]);

        });


        $ionicPlatform.ready(function () {
            var disclaimerAccepted = window.localStorage[DISCLAIMER_STRING_KEY];
            if (!disclaimerAccepted) {
                $scope.showDisclaimer();
            }
            alert('platform ready: ' + window.localStorage[DISCLAIMER_STRING_KEY]);

        });




    })
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
            console.log("Cordova is ready, let's do this!");

        });
    })

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
