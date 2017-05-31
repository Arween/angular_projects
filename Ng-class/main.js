/**
 * Created by user on 30.05.17.
 */

angular.module('APP',[]).
    controller('theController',['$scope',function($scope){
        $scope.items = [
            {'title':'a','type':1},
            {'title':'b','type':2},
            {'title':'c','type':1},
            {'title':'d','type':3}
        ]
        $scope.style1 = 'red';
        $scope.style2 = 'underline';

    }])
