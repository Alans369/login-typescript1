import express,{type Request,type Response} from 'express';

import {router} from "./routers/Auth.ts";
import { json } from 'stream/consumers';

const app = express();

app.use(express.json())

app.use('/',router)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});