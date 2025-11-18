const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const db = require('./database.js');

const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  try{
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: 'Email and password are required' });
  }

  if (await findUser('email', req.body.email)) {
    return res.status(409).json({ msg: 'Existing user' });
  }

  const user = await createUser(req.body.email, req.body.password);
  setAuthCookie(res, user.token);
  res.json({ email: user.email });

   
  }catch(err){
    console.error('Error in /auth/create:', err);
    res.status(500).json({msg:'Server error'});
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  try{
    const user = await findUser('email', req.body.email);
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await db.updateUser(user);
      setAuthCookie(res, user.token);
      return res.json({ email: user.email });
    }
    res.status(401).json({msg: 'Unauthorized' });
  } catch (err) {
    console.error('Error in /auth/login:', err);
    res.status(500).json({msg: 'Server error'});
  }

});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    await db.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  try{
    const user = await findUser('token', req.cookies[authCookieName]);
    if (!user) return res.status(401).json({ msg: 'Unauthorized' });
      req.user = user;
      next(); 
    } catch (err) {
      console.error('Error in verifyAuth:', err);
      res.status(500).json({ msg: 'Unauthorized' });
  }
};



// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await db.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return db.getUserByToken(value);
  }
  return db.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: false,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



apiRouter.get('/profile', verifyAuth, async (req ,res) =>{
    try{
    const profile = await db.getProfile(req.user.email);
    if(!profile){
        return res.status(404).json({msg: 'Profile not found' });
    }
    res.json(profile);
    }catch(err){
        console.error('Error fetching profile:,' , err);
        res.status(500).json({msg: 'Server error'});
}
});

apiRouter.post('/profile', verifyAuth, async(req,res)=>{
    try{
        const email = req.user.email;
        const profileData ={...req.body,email};
        const existing = await db.getProfile(email);

        if(existing){
            await db.updateProfile(email, profileData);
            const updated = await db.getProfile(email);
            res.json(updated);
        } else{
            await db.addProfile(profileData);
            res.status(201).json(profileData);
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({msg: 'Server error' });
    }
});
