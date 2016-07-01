////////****** USER MODEL*********//////////

var userSchema = mongoose.Schema({
	name: {type: String, required: true, minlength : 4, maxlength: 100},
	_lists : [{type: mongoose.Schema.Types.ObjectId, ref:'List'}]
}, {timestamps:true})


///////////////LIST_MODEL//////////////////////


var listModel = new mongoose.Schema({
	creator : {type:String},
	title : {type: String, required: true, minlength : 5},
	description : {type: String, required: true, minlength : 10},
	_user: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
}, {timestamps:true});


///////////////////REGISTER SCHEMA ///////////////

mongoose.model('User', userSchema);  
mongoose.model('List', listModel);
