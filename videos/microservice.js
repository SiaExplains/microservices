const mongoose = require('mongoose');

const app = require('./src/app');
const { DB_URI } = require('./src/config');

mongoose.connect(DB_URI);

app.listen(3000, () => {
    console.log('videos microservice is running on port 3000');
    console.log('+--------------------------+');
});
