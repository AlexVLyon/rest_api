import express from 'express';
import { pollController } from '../controllers/index.js';

const router = express.Router();


router.get('/', pollController.listAll)
router.post('/', pollController.create);
//UPDATE:
router.put('/:id', pollController.update);


//DELETE:

export default router;