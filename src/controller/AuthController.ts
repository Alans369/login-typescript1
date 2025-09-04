import { Request, Response } from "express";
import { UserService } from "../Services/UserService";
import { User } from "../entity/user.entity";
import { JWT } from "../utils/Jwt";

export class AuthController {
    private static userService: UserService = new UserService();

    static async login(req: Request, res: Response):Promise<Response> {
        const { email, password } = req.body;
        const user = new User();
        user.email = email;
        user.password = password;

        try {
            const result:User = await AuthController.userService.findUserBypasswordAndEmail(email, password);
            const token = JWT.crearToken({id:result.id,role:result.role})
             res.status(200).json({
                status: 200,
                success: true,
                message: "login success",
                tokens: token,
                });
        } catch (error) {
            return res.status(400).json({messages:"credenciales invalidas"})
            
        }

        



        return res.send("Login exitoso");
    }
}

