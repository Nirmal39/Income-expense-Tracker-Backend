import ErrorHandler from "../middlewares/error.js"
import { Category } from '../models/Category.js'

export const addCategory = async (req,res) => {
    const { title,icon, type}  = req.body;

    const category = Category({
        title,
        icon,
        type,
    });


    await category.save()


    res.status(201).json({
        success: true,
        message: "Category Created"
    })


}

export const getAll = async (req,res,next) => {
    try {
        const allCatgeory = await Category.find()
        res.status(200).json({
            success: true,
            data : allCatgeory
        })
    } catch (error) {
        next(error)
    }
}

export const deleteCat = async(req,res,next) => {

    const {id} = req.params;
    try {
        await Category.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Deleted Successfully"
        })
    } catch (error) {
        next(error)
    }
}