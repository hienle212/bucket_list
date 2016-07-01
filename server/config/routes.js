var user = require('../controllers/users.js')
var list = require('../controllers/lists.js')


module.exports = function(app){ 
  app.post('/login', user.login);
  app.get('/users', user.showall );
  app.get('/users/:id', user.showOne );

  app.get('/lists', list.showall );
  app.post('/lists', list.create );


}