# Learn All The Nodes Episode 27

## What's new in Express 4 (Part 2 - the router)

[View the episode](http://www.learnallthenodes.com/episodes/27-whats-new-in-express-4-part-2-the-router)


### Notes

[Express 4 migration guide](https://github.com/visionmedia/express/wiki/Migrating%20from%203.x%20to%204.x)

[Express 4 router documentation](http://expressjs.com/4x/api.html#router)

[`router.use`](http://expressjs.com/4x/api.html#router.use)

[Episode code](https://github.com/LearnAllTheNodes/episode00027)

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

