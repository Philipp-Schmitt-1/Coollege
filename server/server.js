const express = require('express');
const app = express();

// Middlewares and other setup logic
app.use(express.json());

// Route definitions
app.use('/users', require('./routes/users'));
app.use('/courses', require('./routes/courses'));
app.use('/quizzes', require('./routes/quizzes'));
app.use('/resources', require('./routes/resources'));
app.use('/forum', require('./routes/forum'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
