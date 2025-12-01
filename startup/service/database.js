const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');



const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

const db = client.db('startup');
const userCollection = db.collection('user');
const profileCollection = db.collection('profile');
const dietCollection = db.collection('diet');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

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

async function addInput(entry){
  await dietCollection.insertOne(entry);
}
async function getInputs(email){
  return dietCollection
}

async function addDietEntry(entry){
  await dietCollection.insertOne(entry);
}
async function getDietHistory(email){
  return dietCollection.find({email}).sort({date:1}).toArray();
}



module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  getProfile,
  addProfile,
  updateProfile,
  addInput,
  getInputs,
  addDietEntry,
  getDietHistory
};