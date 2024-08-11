const express = require('express');
const router = express.Router();
const { registerUser, authUser, updateUser, deleteUser, getUser, getUsers } = require('../controllers/userController');

// مسارات التسجيل وتسجيل الدخول
router.post('/register', registerUser);
router.post('/login', authUser);

// مسارات الحصول على قائمة المستخدمين والمستخدمين بواسطة المعرف
router.get('/', getUsers); // للحصول على جميع المستخدمين
router.get('/:id', getUser); // للحصول على مستخدم بواسطة المعرف

// مسارات التحديث والحذف
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
