import express from 'express';

import userRouter from './user.js';

import {getAll,addCategory,deleteCat} from '../controllers/category.js'

const router = express.Router();

import { isAuthenticated } from '../middlewares/auth.js';

router.post('/add-category',  addCategory)
      .get('/get-all',  getAll)
      .delete('/:id', deleteCat)


export default router;