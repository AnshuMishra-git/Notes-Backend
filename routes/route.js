
const middleware = require('../modules/service/middleware');
const {createNotes, myNotes}=  require('../controllers/notesController')
const {userCreate} = require('../controllers/userController')
const {jwt} = require('../modules/service/auth');
const notesValidation = require('../models/validatior/Notes');
const userValidation = require('../models/validatior/User')
module.exports = (app)=>{
  // Users
  app.post('/user/create',middleware(userValidation.create), userCreate);
  // Notes
  app.post('/notes/create',jwt, middleware(notesValidation.create), createNotes);
  app.post('/myNote', jwt, middleware(notesValidation.mynote), myNotes )
};

