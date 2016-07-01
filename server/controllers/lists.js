var List = mongoose.model('List')
var User = mongoose.model('User')

module.exports = (function(){
  return {
    showall: function(req, res) {
      List.find({}).populate('_user').exec(function(err, list){
        if(err){ res.json(err) ; }
        else { res.json(list) ; }
      })
    },
    create: function(req, res){
          var newList = new List(req.body);
              newList.save(function(err){
              if(err){  res.json(err);  }
              else{            
                User.findOne({_id: req.body._user}, function(err, user){
                  if(err){  res.json({errors: err}); }
                  else{
                      console.log(user);
                      user._lists.push(newList._id);
                      user.save(function(err){
                          if (err) { res.json({errors: err}); }
                                  else{  res.json({success: true}); }
                        })
                      }
                  })
                }
              })
        }
  }
})()