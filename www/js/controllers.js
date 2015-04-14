angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('ListCtrl', function ($scope, Chats, allorders) {

        $scope.orders = allorders;
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats, allorders) {
        $scope.orders = allorders.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })

    .controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
        $scope.data = {};

        $scope.login = function () {
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
                $state.go('tab.dash');
            }).error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Обломсь!',
                    template: 'Проверь свои данные!'
                });
            });
        }
    })