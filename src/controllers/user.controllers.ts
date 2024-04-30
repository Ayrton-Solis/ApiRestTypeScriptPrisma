import { Request, Response } from "express";
import { ServiceUser } from "../service/user-service";
import { log } from "console";


export class User {
  static async findAll(req: Request, res: Response): Promise<Response> {
    try {

      ServiceUser.find(req, res);

      return res.status(200)

    } catch (error) {
      console.log(error);
      return res.status(500).json('internal service error' + error);
    };
  };

  static async createUser(req: Request, res: Response): Promise<Response> {
    try {

      const token = await ServiceUser.create(req, res);

      return res.cookie('token', token).json('user created successfully')

    } catch (error) {
      console.log(error);
      return res.status(500).json('internal service error' + error)
    };
  };

  static async updateUser(req: Request, res: Response): Promise<Response> {
    try {

      ServiceUser.update(req, res);

      return res.status(200).json('user updated successfully');

    } catch (error) {
      console.log(error);
      return res.status(500).json('internal server error' + error);
    };
  };

  static async deleteUser(req: Request, res: Response): Promise<Response> {
    try {

      ServiceUser.delete(req, res);

      return res.status(200).json('user deleted successfully');

    } catch (error) {
      return res.status(500).json('internal server error' + error);
    };
  };

  static login(req: Request, res: Response) {
    try {

      ServiceUser.login(req, res);

      res.status(200);

    } catch (error) {
      return res.status(500).json('internal server error' + error);
    };
  };

  static logout(req: Request, res: Response) {
    
    ServiceUser.logout(req, res);

    return res.status(200);

  };

  static profile(req: Request, res: Response){
    ServiceUser.profile(req, res);
  };
};