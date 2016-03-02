
(function () {
    'use strict';
    
    angular.module('myApp')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
       
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

   
        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
        	
        	console.log("In current user!!" + $rootScope.globals.currentUser);
        	
            UserService.GetById($rootScope.globals.currentUser.username)
                .then(function (user) {
                	console.log("In GetById!!" + user);
                    vm.user = user;
                  
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
    }
    
    
    
   

})();