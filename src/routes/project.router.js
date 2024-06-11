import express from 'express';
const router = express.Router();
import { create, project, createIssue } from '../controllers/project.controller.js';

router.post('/create', create);
router.get('/:id', project);
router.post('/:id', createIssue);

export default router;
