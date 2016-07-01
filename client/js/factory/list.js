
  myApp.factory('ListFactory', function($http){

    var factory = {};

    factory.showall = function(callback){
      $http.get('/lists').success(function(data){
          callback(data)
      });
    }

    factory.create = function(info, callback){
      $http.post('/lists', info).success(function(data){
        if(!data.status){
          console.log(data)
        }          
        callback()
      })
    }

  return factory
    })