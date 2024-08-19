// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const helmet = require('helmet');
// const compression = require('compression');
// const morgan = require('morgan');
// const { notFound, errorHandler } = require('./utils/errorHandler');
// const cors = require('cors'); // استيراد مكتبة CORS
// const { Country, State, City } = require('country-state-city');
// // Load environment variables
// dotenv.config();

// // Connect to database
// connectDB();

// const app = express();



// app.use(helmet());
// app.use(compression());
// app.use(morgan('dev'));
// app.use(express.json());

// // start contries and cities and govrnorates
// // استيراد مساراتنا الجديدة
// const countryRoutes = require('./routes/countryRoutes');
// const stateRoutes = require('./routes/stateRoutes');
// const cityRoutes = require('./routes/cityRoutes');
// // start cors

// app.use(cors({
//     origin: ['http://localhost:5173', 'http://example.com'], // السماح لمصادر متعددة
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization'
//   }));
//   // end cors
// app.use('/api', countryRoutes);
// app.use('/api', stateRoutes);
// app.use('/api', cityRoutes);

// // end contries and cities and govrnorates

// // Routes
// app.use('/api/users', require('./routes/userRoutes'));
// // app.use('/api/countries', require('./routes/countryRoutes'));
// // app.use('/api/cities', require('./routes/cityRoutes'));
// // app.use('/api/governorates', require('./routes/governorateRoutes'));

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const countryRoutes = require('./routes/countryRoutes');
const stateRoutes = require('./routes/stateRoutes');
const cityRoutes = require('./routes/cityRoutes');
const addressRoutes = require('./routes/addressRoutes');
const cors = require('cors'); // استيراد مكتبة CORS

const app = express();

// اتصال بقاعدة البيانات
connectDB();

// إعداد middlewares
app.use(bodyParser.json());

app.use(cors({
    origin: ['http://localhost:5173', 'http://example.com'], // السماح لمصادر متعددة
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  }));
// إعداد routes
app.use('/api/countries', countryRoutes);
app.use('/api/states', stateRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/addresses', addressRoutes);


// بدء تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
