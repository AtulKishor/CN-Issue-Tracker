
import express from 'express';

const router = express.Router();

// Home Page
router.get('/', (req, res) => res.render('home'));

export default router;
