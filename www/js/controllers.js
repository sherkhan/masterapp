angular.module('starter.controllers', [])

    .controller('InfoCtrl', function ($scope) {
    })

    .controller('OrdersCtrl', function ($scope, Orders, allorders, $timeout) {
        $scope.refresh = function() {

            $timeout(function () {
                //simulate async response
                //$scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');

            }, 1000);
        };

        $scope.orders = allorders;
        $scope.remove = function (order) {
            Orders.remove(order);
        }
    })

    .controller('OrderDetailCtrl', function ($scope, $stateParams, Orders, allorders) {
        //$scope.orders = allorders.get($stateParams.orderId);
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
                $state.go('tab.info');
            }).error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Обломсь!',
                    template: 'Проверь свои данные!'
                });
            });
        }
    })

