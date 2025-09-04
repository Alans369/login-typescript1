import express,{Application} from 'express';
import "reflect-metadata";
import { Userouter } from './routers/user';
import { Categoryrouter } from './routers/category';
import { Productrouter } from './routers/product';
import { Authrouter } from './routers/Auth';

export class App{
    app:Application;
    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        
        this.app.use(express.json());
    }

    private routes() {
        this.app.use('/api/v1/auth/login',Authrouter)
        this.app.use('/api/v1/users',Userouter);
        this.app.use('/api/v1/categories',Categoryrouter);
        this.app.use('/api/v1/products',Productrouter);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }


}