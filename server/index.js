// ... Other imports ...

const balanceRoutes = require('./routes/balance');
const courseRoutes = require('./routes/courses');

app.use('/api/balance', balanceRoutes);
app.use('/api/courses', courseRoutes);

// ... Rest of the code ...
