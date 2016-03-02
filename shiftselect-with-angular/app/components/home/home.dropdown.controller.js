 (function () {
    'use strict';

    
    angular
    .module('myApp').controller('HomeDropdownCtrl', 
    		function ($scope, $log) {
    	
    	console.log("Here DropdownCtrl!!");
    	$scope.items = [
    	                'choice 1',
    	                'choice 2',
    	                'choice 3'
    	              ];

    	              $scope.status = {
    	                isopen: false
    	              };

    	              $scope.toggled = function(open) {
    	                $log.log('Dropdown is now: ', open);
    	              };

    	              $scope.toggleDropdown = function($event) {
    	                $event.preventDefault();
    	                $event.stopPropagation();
    	                $scope.status.isopen = !$scope.status.isopen;
    	              };
    	            });

   
  
    
    

})();