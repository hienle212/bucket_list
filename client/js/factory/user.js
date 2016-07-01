  myApp.factory('UserFactory', function($http){

  var factory = {} // blank object
  factory.user = {loggedIn : false}

  factory.showall = function(callback){
      $http.get('/users').success(function(data){
          callback(data)
      });
    }
  factory.logReg = function(userData, callback){
    $http.post('/login', userData).success(function(data){
      callback(data)
    })
  }
  factory.showOne = function(id, callback){
    $http.get('/users/'+ id).success(function(data){
      if(!data.status){
    }
        callback(data);
      })
    }
  return factory
})