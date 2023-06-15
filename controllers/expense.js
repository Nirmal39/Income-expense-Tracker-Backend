import { ExpenseSchema } from "../models/expenseModel.js"
import ErrorHandler from "../middlewares/error.js"


export const addExpense = async (req, res,next) => {
    const { amount, category, date}  = req.body

    const income = ExpenseSchema({
        amount,
        category,
        date,
        user : req.user
    })

    try {
        //validations
        if( !category || !date){
            return next(new ErrorHandler("All fields are required!",400));
        }
        if(amount <= 0 || !amount === 'number'){
            return next(new ErrorHandler("Amount must be a positive number!",400));
        }
        await income.save()
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        next(error)
    }

}

export const getExpense = async (req, res,next) =>{
    try {
        const userId = req.user._id;
        const incomes = await ExpenseSchema.find({user:userId}).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        next(error)
    }
}

export const deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            next(err)
        })
}