var express = require('express')
  , app = express()

var pointlessFormTemplate = '<html><body><form method="POST" action="/admin/users"><label>foo</label><input type="text" name="foo" value="bar"><button type="submit">Submit</button></body></html>'

function genericRoute(req,res) {
  var strToSend = '[' + req.method + '] You hit: ' + req.path + '. We just wanted to let you know, in case you didn\'t believe your URL bar'

  if (req.body) {
    strToSend += '<p>You also had this request body: ' + require('util').inspect(req.body)
  }

  res.send(strToSend)
}

function formRoute(req,res) {
  res.send(pointlessFormTemplate)
}

function ensureAdmin(req,res,next) {
  console.log('Gee, I sure hope that was an admin!')
  next()
}

function ensureUser(req,res,next) {
  console.log('Well, the user *claims* to have logged in...')
  next()
}

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

var adminRouter = express.Router()

adminRouter.use('/', ensureAdmin)
adminRouter.route('/users')
  .get(formRoute)
  .post(genericRoute)
adminRouter.get('/accounts`', genericRoute)
adminRouter.get('/transactions', genericRoute)

var authRouter = express.Router()
authRouter.get('/sign_in', genericRoute)
authRouter.get('/sign_out', genericRoute)
authRouter.get('/register', genericRoute)

var coreAppRouter = express.Router()
coreAppRouter.get('/widgets', genericRoute)
coreAppRouter.get('/tasks', genericRoute)

app.use('/admin', adminRouter)
app.use('/auth', authRouter)
app.use('/app', coreAppRouter)


app.get('/route1', function handler1(req,res) {res.send('route1')})
app.use(function(req,res,next) {console.log('middleware'); next()})
app.get('/route2', function handler2(req,res) {res.send('route2')})


app.listen(3000)

console.log("I'm listening on port 3000!")

