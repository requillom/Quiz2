//author: Mary Requillo

const mongoose = require('mongoose');
const express = require('express');

app = express();
const port = process.env.PORT || 7000;

mongoose.connect('mongodb+srv://requillom:requillom@cluster0.ma2bpy7.mongodb.net/Exam');

const quizSchema = new mongoose.Schema({
    name: String,
    sid: Number,
  });

  const QuizModel = mongoose.model('Quiz', quizSchema);

  app.get('/', (req, res) => {
    const quiz = new QuizModel({
        name: 'Mary Key Requillo',
        sid: 300349038
    })

    QuizModel.insertMany([quiz]);
    res.send(quiz);
})

app.listen(port, () => {
    console.log('Server is running on port:' + port);
})