const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

// const Database = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const Database = process.env.DATABASE;

mongoose.connect(Database, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Successfully Connceted.");
}).catch((err) => {
    console.log(err);
});

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`VGEC Meta Server Is Listing on Port No. ${port}...`);
});
