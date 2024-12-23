import express from 'express';
import { login, test } from '../controllers/authController.js';
const router = express.Router();

router.get('/test', test);
router.get('/google', login);

export default router;