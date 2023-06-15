import  { addExpense, getExpense, deleteExpense } from '../controllers/expense.js';
import { addIncome, getIncomes, deleteIncome } from '../controllers/income.js';
import express from 'express'

const router = express.Router();

import  {isAuthenticated} from '../middlewares/auth.js'

router.post('/add-income',isAuthenticated, addIncome)
    .get('/get-incomes',isAuthenticated,  getIncomes)
    .delete('/delete-income/:id',isAuthenticated,  deleteIncome)
    .post('/add-expense',isAuthenticated,  addExpense)
    .get('/get-expenses',isAuthenticated,  getExpense)
    .delete('/delete-expense/:id',isAuthenticated,  deleteExpense)


export default router;