// ملف منفصل مثل db.js أو ضمن index.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hamzamaged2742000:ftAvdjja5eZRHnyo@gcc.wcggl.mongodb.net/?retryWrites=true&w=majority&appName=GCC');
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;
