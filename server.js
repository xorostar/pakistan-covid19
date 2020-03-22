const path = require('path');
const logger = require('morgan');
const express = require('express');
const app = express();

// Initialize Middleware
if (process.env.NODE_ENV == 'production') {
  // Create a write stream for morgan logging (in append mode)
  var accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {
      flags: 'a'
    }
  );
  app.use(logger('combined', { stream: accessLogStream }));
} else {
  app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
