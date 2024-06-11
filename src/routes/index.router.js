import express from 'express';
import homeController from '../controllers/home.controller.js';

const router = express.Router();
// Home Page
router.get('/', homeController);

export default router;
