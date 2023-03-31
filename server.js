const mongoose = require('mongoose');
const express = require('express');

app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://requillom:requillom@cluster0.ma2bpy7.mongodb.net/Activity');
// mongoose.connect('mongodb://127.0.0.1:27017/Activity');

const activitySchema = new mongoose.Schema({
    activity: {type: String, required: true}
})

const ActivityModel = mongoose.model('Activity', activitySchema);


app.get('/', (req, res) => {
    const task1 = new ActivityModel({
        activity: 'activity 1'
    })

    ActivityModel.insertMany([task1]);
    res.send('<h2>Document Added</h2>');
})

app.listen(port, () => {
    console.log('Server is running on port:' + port);
})