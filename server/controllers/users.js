var User = mongoose.model('User')

module.exports = ( function(){

	return {	
    	showall: function(req, res) {
      User.find({}).populate('_lists').exec(function(err, user){
        res.json(user)
      })
    },
		login: function(req, res){
			User.findOne({name : req.body.name }, function(err, user){
				console.log(user)
				if(err) res.json({'status' : false, 'errors': 'User not found'})
					else if (!user) {
						var user = new User(req.body);
						user.save(function(err){
							if(err) res.json ({'status' : false, 'errors': err})
								else res.json({'status' : true, 'user': {name : user.name, id: user._id }})
						})
						console.log('we have to create the user')
					} else{
						res.json({'status' : true, 'user': {name : user.name, id: user._id }})
						console.log('we have user')
					}

			})
		},
		showOne: function(req, res){
      		User.findOne({_id: req.params.id}).populate('_lists').exec(function(err, user){
        if(err) res.json(err)
        else res.json(user)
     	 })
    	}
	}

}) ()