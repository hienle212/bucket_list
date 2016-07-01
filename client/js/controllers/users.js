  myApp.controller('UsersController', function(UserFactory, $location){

  var self = this;

  self.logReg = function(){
    UserFactory.logReg(self.newUser, function(data){ 
      if(data.errors){
        self.errors = errors
      }
      else{
        UserFactory.user = data.user;
        UserFactory.user.loggedIn = true;
        self.user = data.user;
      }
      self.newUser = {}
      $location.url('/dashboard')
    })
  }


  
})
