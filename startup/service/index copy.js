const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const path = require('path');
const app = express();
const db = require('./database.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);



// Find user by key (email or token)
const findUser = async (key, value) => {
    if(key ==='email'){
        return db.getUser(value);
    }else if (key ==='token'){
        return db.getUserByToken(value);
    }
    return null;
};

// Create new user with hashed password
const createUser = async (email, password) => {
  const hashed = await bcrypt.hash(password, 10);
  const user = { email, password: hashed, token: uuid.v4() };
  await db.addUser(user);
  return user;
};

// Set auth cookie
const setAuthCookie = (res, token) => {
  res.cookie(authCookieName, token, { httpOnly: true });
};


apiRouter.post('/auth/signup', async (req,res) => {
    if(await findUser ('email', req.body.email)){
        res.status(409).send({msg: 'Existing user' });
    }else {
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user.token);
        res.send({email:user.email, token:user.token});
        
    }
});

apiRouter.post('/auth/login', async (req,res) =>{
    const {email, password} = req.body;
    const user = await db.getUser(email);
    if(user && (await bcrypt.compare(password, user.password))){
        user.token = uuid.v4();
        await db.updateUser(user);
        setAuthCookie(res, user.token);
        res.send({email: user.email, token: user.token});
    }else{
        res.status(401).send({msg: 'Unauthorized'});
        }
});

apiRouter.delete('/auth/logout', async(req,res) =>{
    const token = req.coolies[authCookieName];
    const user = await db.getUserByToken('token');
    if(user){
        delete user.token;
        await db.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const verifyAuth = async (req, res, next) =>{
    const token = req.cookies[authCookieName];
    const user = await db.getUserByToken(token);
    if(user){
        req.user = user;
        next();
    } else{
        res.status(401).send({msg: 'Unauthorized'});
    }
};

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



apiRouter.get('/input', verifyAuth, (req,res) =>{
    res.send(diets);
});

// apiRouter.post('/input', verifyAuth, (req,res) =>{
//     const {date, food, calories, protein, carbs, fats} = req.body;
//     const newEntry = {
//         id: diets.length + 1,
//         date, 
//         food,
//         calories,
//         protein,
//         carbs,
//         fats
//     };
//     diets.push(newEntry);
//     res.status(201).send(newEntry);
// });

// apiRouter.get('/input/diet/search', verifyAuth, async(req,res)=> {
//     const query = req.query.q;
//     if(!query){
//         return res.status(400).json({error:'Missing query parameter'});
//     }
//     try{
//         const apiUrl= `https://api.edamam.com/api/food-database/v2/parser?ingr=${encodeURIComponent(query)}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`;

//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         res.json(data);

//         // res.json({ message: 'API call disabled: set real EDAMAM_APP_ID and EDAMAM_APP_KEY' });

    

//     } catch (err) {
//         console.error('Error fetching food data:', err);
//         res.status(500).json({error:'Failed to fetch food data'});
//     }
// });

// apiRouter.get('/graph', verifyAuth,(req,res) =>{
//     res.send(diets);
// });


app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`);
});


