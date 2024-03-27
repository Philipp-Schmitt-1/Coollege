const express = require('express');
const router = express.Router();

// Dummy database (I will use a real DB in production)
let courses = [
    { id: 1, name: "Intro to Blockchain", description: "Overview of blockchain tech." },
    // ... other courses
];

router.get('/', (req, res) => {
    res.json(courses);
});

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found.');
    res.json(course);
});

// ... Add, Update, Delete operations, token rewards, etc.

module.exports = router;
