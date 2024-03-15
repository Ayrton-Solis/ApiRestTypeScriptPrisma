import { Request, Response } from "express";
import { ServiceUser } from "../service/service-user";


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
      
      ServiceUser.create(req, res);

      return res.status(200).json('user created successfully');

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

  static async findById(req: Request, res: Response) {
    try {

      ServiceUser.findById(req, res);

      return res.status(200)

    } catch (error) {
      return res.status(500).json('internal server error' + error);
    };
  };
};