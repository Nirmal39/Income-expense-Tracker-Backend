import { IncomeSchema } from "../models/incomeModel.js"
import ErrorHandler from "../middlewares/error.js"


export const addIncome = async (req, res,next) => {
    const { amount, category,  date}  = req.body

    const income = IncomeSchema({
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
        res.status(201).json({message: 'Income Added'})
    } catch (error) {
        next(error)
    }

}

export const getIncomes = async (req, res,next) =>{
    try {
        const userId = req.user._id;
        const incomes = await IncomeSchema.find({user:userId}).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        next(error)
    }
}

export const deleteIncome = async (req, res,next) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            next(err)
        })
}