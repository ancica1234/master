 (function () {
    'use strict';

    
    angular
    .module('myApp').controller('MainController', 
    		function ($scope) {
    	
    	console.log("Here MainController!!");
    		$scope.items = [
    		                    {
    		                        name: "Qucklinks",
    		                        desc: "Quicklinks",
    		                        subitems: [
    		                            {
    		                                name: "viewExistingPositons",
    		                                desc: "View Existing Position"
    		                            },
    		                            {
    		                                name: "vieQualEmp",
    		                                desc: "View Qualified Employees"
    		                            },
    		                            {
    		                                name: "lastMinAvb",
    		                                desc: "Last Minute Availabity"
    		                            }, 
    		                            {
    		                                name: "changePass",
    		                                desc: "Change Password"
    		                            }, 
    		                            {
    		                                name: "viewStuffProf",
    		                                desc: "View Stuff Profiles"
    		                            }, 
    		                            {
    		                                name: "primarySGupdts",
    		                                desc: "Primary Shift/Group Updates"
    		                            }]
    		                    },
    		                    {
    		                        name: "MyToDos",
    		                        desc: "My To Dos",
    		                        subitems: [
    		                            {
    		                                name: "credentialExpWrn",
    		                                desc: "Credential expiration Warning"
    		                            },
    		                            {
    		                                name: "stfWaiting",
    		                                desc: "Staff profiles waiting approval"
    		                            },
    		                            {
    		                                name: "shiftsWithReq",
    		                                desc: "Shhifts with requests to be awarded"
    		                            },
    		                            {
    		                                name: "shiftsWith72",
    		                                desc: "Shhifts starting withing 72 hours"
    		                            },
    		                            {
    		                                name: "nondityReq",
    		                                desc: "Non-Duty Requests for Review"
    		                            }]
    		                    },
    		                    {
    		                        name: "MyShiftSummary",
    		                        desc: "My Shift Summary",
    		                        subitems: [
    		                            {
    		                                name: "closedSfts",
    		                                desc: "Closed Shifts (winner selected)"
    		                            },
    		                            {
    		                                name: "closedShftsWihtoutRqs",
    		                                desc: "Closed Shifts without requests"
    		                            },
    		                            {
    		                                name: "openShfts",
    		                                desc: "Open Shifts"
    		                            },
    		                            {
    		                                name: "reqShfts",
    		                                desc: "Requested Shifts"
    		                            }]
    		                    }
    		                ];

    		$scope.default = $scope.items[2];
    		});

    angular
    .module('myApp').controller('ItemController', ['$scope', function (scope) {
    	console.log("Here ItemController!!");

    		                scope.$parent.isopen = (scope.$parent.default === scope.item);

    		                scope.$watch('isopen', function (newvalue, oldvalue, scope) {
    		                    scope.$parent.isopen = newvalue;
    		                });

    		            }]);
  
    
    

})();