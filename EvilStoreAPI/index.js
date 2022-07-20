const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cors = require('cors');

app.use(express.json());

dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('DB connected succesfull');
}).catch((error) => {
    console.log(error);
});

app.use(cors());

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running!')
})