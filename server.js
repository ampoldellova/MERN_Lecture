const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const postRoutes = require('./routes/post');

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connected'))
    .catch(error => console.log(error))

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', postRoutes);

// app.get('*', (req, res) => {
//     res.json({
//         data: 'You reached nodejs api for react node crud app'
//     });
// });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));