import express from 'express';
import { pollController } from '../controllers/index.js';

const router = express.Router();


router.post('/', pollController.create);
//UPDATE:

//DELETE:

export default router;