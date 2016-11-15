var app = angular.module('myApp', []);
app.controller('myControler', function($scope) {
    $scope.todoList = [{todoText:'tasks', done:false}];


    $scope.todoAdd = function() {
       if ($scope.todoInput){
            console.log($scope.todoInput);
            $scope.todoList.push({todoText:$scope.todoInput, done:false});
            $scope.todoInput = "";
        }
    };

    $scope.remove = function() {
        var oldVal = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldVal, function(task) {
            if (!task.done) $scope.todoList.push(task);
        });
    };



}); 


app.controller('injectYoutube', function($scope) {

    $scope.checkYoutube = function() {

        if ($scope.checkYoutube){
            console.log($scope.checkYoutube);
        }

         $scope.addYt = function() {
           if ($scope.checkYoutube){
                console.log($scope.checkYoutube);
                $scope.checkYoutube.push({yt:$scope.checkYoutube, done:false});
                $scope.checkYoutube = "";
            }
        };

        $scope.checkYoutube =  $scope.checkYoutube.push({todoYt:$scope.todoInput, done:false});
            
        var url = $('#youTubeUrl').val();
        if (url != undefined || url != '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                // Do anything for being valid
                // if need to change the url to embed url then use below line
                $('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
            }
            else {
                // Do anything for not being valid
            }
        }
    }
}); 