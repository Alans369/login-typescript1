import   {Router } from "express";
import type { Request, Response } from "express";

import {User} from "../models/User.ts"

export const router = Router();

router.post('/', (req:Request, res:Response) => {

    const datos =  req.body;
    console.log(req.body);
    console.log(new User);

    res.json(datos)
});



