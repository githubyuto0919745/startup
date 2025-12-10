const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');



const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

let db, userCollection, profileCollection, dietCollection, graphCollection;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('startup');
    userCollection = db.collection('user');
    profileCollection = db.collection('profile');
    dietCollection = db.collection('diet');
    graphCollection = db.collection('graph');
    console.log('Connected to database');
  } catch (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  }
}

connectDB();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function getProfile(email){
  return profileCollection.findOne({email});
}
async function addProfile(profile){
  await profileCollection.insertOne(profile);
}
async function updateProfile(email,data){
  await profileCollection.updateOne({email},{ $set:data});
}

async function addDietEntry(entry){
  await dietCollection.insertOne(entry);
}
async function getDietHistory(email){
  return dietCollection.find({email}).sort({date:1}).toArray();
}

async function addGraphdata(email, graphData){
  return await graphCollection.updateOne(
    {email},
    {$set: graphData},
    {upsert: true}
    );
}
async function getGraphdata(email){
  return await graphCollection.findOne({email});
}

module.exports = {
  connectDB,
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  getProfile,
  addProfile,
  updateProfile,
  addDietEntry,
  getDietHistory,
  addGraphdata,
  getGraphdata
};