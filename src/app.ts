

import express from 'express';
import "reflect-metadata";

import { router } from "./routers/Auth";


import { myDataSource } from "./ data-source";
import { Userouter } from './routers/user';
import { NextFunction, Request, Response } from 'express';


export let dataSource:typeof myDataSource;

// establish database connection
try {
    async function initializeDataSource() {
        dataSource = await myDataSource.initialize();
        console.log("Data Source has been initialized!")
    }
    initializeDataSource();
    
    
     
   
} catch (error) {
    console.error("Error during Data Source initialization:", error)
}

const app = express();



app.use(express.json())



app.use('/user',Userouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});