import   {Router } from "express";
import type { Request, Response } from "express";



export const router = Router();

router.post('/', (req:Request, res:Response) => {

    const datos =  req.body;
  

    res.json(datos)
});



