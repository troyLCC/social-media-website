//Requrining a package and calling a function from the package
const express = require('express');

const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();
//DB config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose
  .connect(db, {useNewUrlParser: true })
  .then(() => console.log('MD connected'))
  .catch(err => console.log(err));
//Handeling homepage request. res.send sends an HTML 
app.get('/', (req, res)=> res.send('Hello') );

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
//Setting port's variable
const port = process.env.PORT || 5000; 
//Listens requests from a specific port, in this case 5000
app.listen(port, () => console.log(`Server running on ${port}`));
