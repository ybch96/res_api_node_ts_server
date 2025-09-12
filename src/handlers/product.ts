import {Request, Response} from "express"
import {check,validationResult} from "express-validator"
import Products from "../models/Products.model"

export const createProducts = async (req:Request, res: Response) => {
    // const product = new Products(req.body)
    // product.save()
    await check("name").notEmpty().withMessage("Debe enviar un nombre valido").run(req)

    const err = validationResult(req)
    console.log(err)
    if(!err.isEmpty()){
        return res.status(400).json(err)
    }
    const product = await Products.create(req.body)

    res.json({data:product})
}