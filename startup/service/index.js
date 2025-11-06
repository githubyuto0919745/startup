const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));


// Find user by key (email or token)
const findUser = async (key, value) => {
  return users.find(user => user[key] === value);
};

// Create new user with hashed password
const createUser = async (email, password) => {
  const hashed = await bcrypt.hash(password, 10);
  const user = { email, password: hashed, token: uuid.v4() };
  users.push(user);
  return user;
};

// Set auth cookie
const setAuthCookie = (res, token) => {
  res.cookie(authCookieName, token, { httpOnly: true });
};

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', async (req,res) => {
    if(await findUser ('email', req.body.email)){
        res.status(409).send({msg: 'Existing user' });
    }else {
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({email:user.email});
    }
});

apiRouter.post('/auth/login', async (req,res) =>{
    const user = await findUser('email', req.body.email);
    if(user){
        if(await bcrypt.compare(req.body.password, user.password)){
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({email: user.email});
            return;
        }
    }
    res.status(401).send({msg: 'Unauthorized'});
});

apiRouter.delete('/auth/logout', async(req,res) =>{
    const user = await findUser('token', req.cookies[authCookieName]);
    if(user){
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const verifyAuth = async (req, res, next) =>{
    const user = await findUser('token', req.cookies[authCookieName]);
    if(user){
        next();
    } else{
        res.status(401).send({msg: 'Unauthorized'});
    }
};

// apiRouter.get('/profile/profile', verifyAuth, (req,res) =>{
//     const user = users.find(u=> u.token ===req.cookies[authCookieName]);
//     res.send({email: user.email, msg: 'This is a restricted profile page'});
// });




