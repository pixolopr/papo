angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        console.log("OPEN LOGIN MODAL");
        $scope.showPopup = function () {
            $scope.data = {};

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="password" ng-model="data.wifi">',
                title: 'Login',
                subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
    ]
            });
        };
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };








})


.controller('homeCtrl', function ($scope, $stateParams, $ionicPopup) {
        var myPopup;
        $scope.login = function () {
            console.log("OPEN LOGIN MODAL");

            $scope.showPopup = function () {
                $scope.data = {};

                // An elaborate, custom popup
                myPopup = $ionicPopup.show({
                    templateUrl: 'templates/login.html',
                    title: 'Login',
                    cssClass: "loginpop",
                    scope: $scope,
                    buttons: [
    ]
                });
            };
            $scope.showPopup();
        };

        $scope.close = function () {
            myPopup.close();
        };

    })
    .controller('aboutCtrl', function ($scope, $stateParams) {})
    .controller('walletCtrl', function ($scope, $stateParams) {})
    .controller('profileCtrl', function ($scope, $stateParams) {})
    .controller('customercareCtrl', function ($scope, $stateParams) {})
    .controller('loginCtrl', function ($scope, $stateParams) {});
