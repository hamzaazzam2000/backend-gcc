const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./utils/errorHandler');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/countries', require('./routes/countryRoutes'));
app.use('/api/cities', require('./routes/cityRoutes'));
app.use('/api/governorates', require('./routes/governorateRoutes'));

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
