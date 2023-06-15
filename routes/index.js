import express from 'express';

import userRouter from './user.js';

import transactionRouter from './transactions.js'

import categoryRouter from './category.js'

const router = express.Router();




router.use('/users',userRouter);

router.use('/transactions',transactionRouter)

router.use('/category', categoryRouter)


export default router;