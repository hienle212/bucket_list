  myApp.controller('ListController', function(UserFactory, ListFactory, $location, $routeParams){
  var self = this;
      self.lists = {};
      self.newList ={};

    ListFactory.showall(function(data){
      self.lists = data
    })

  var user_showall = function(){
    UserFactory.showall(function(data){
      self.users = data
    })
  } 
  user_showall(); 
  
  var checkSession = function(){
    if(UserFactory.user.loggedIn){
      self.user = UserFactory.user
        console.log(self.user)
    }
    else{  $location.url('/')  }
  }
  checkSession() // private function 


  self.create = function(data){
      self.newList.creator = self.user.name;
      console.log(self.user)
    ListFactory.create(self.newList, function(){
      ListFactory.showall(function(data){
      self.lists = data
    })    
  })
    }

  var showOne = function(id){
    console.log($routeParams)
    UserFactory.showOne($routeParams.id, function(data){
      self.user_info = data
    })
  }
  showOne()

  self.logout = function(){
    UserFactory.user = {loggedIn:false}
    $location.url('/')
  }

  })