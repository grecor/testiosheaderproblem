angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaStatusbar) {
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
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
