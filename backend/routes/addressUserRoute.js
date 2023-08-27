import express from "express"
import Address from "../models/addressUsersModel.js"
const addressRouter = express.Router();

addressRouter.post('/api/addressNew', async (req, res) => {
    const address = new Address({
        province: req.body.province,
        city: req.body.city,
        street: req.body.street,
        postCode: req.body.postCode,
        mobile: req.body.mobile,
        tell: req.body.tell,
        user_id:req.body.user
    })

    await address.save()
    
})