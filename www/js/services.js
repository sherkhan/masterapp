angular.module('starter.services', [])

    .factory('Orders', function ($http, $q) {

        var orders = [];
        return {
            all: function(){
                var dfd = $q.defer();
                $http.get("./data/anton.json").then(function(response){
                    orders = response.data;

                    dfd.resolve(orders);
                });
                return dfd.promise;
            },
            get: function(friendId) {
                for (var i = 0; i < orders.length; i++) {
                    if (orders[i].id === parseInt(friendId)) {
                        return orders[i];
                    }
                }
                return null;
            }
        }
    })

    .service('LoginService', function ($q) {
        return {
            loginUser: function (name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (name == '1' && pw == '1') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })