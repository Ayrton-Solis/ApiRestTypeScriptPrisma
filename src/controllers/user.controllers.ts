import { Request, Response } from "express";
import { ServiceUser } from "../service/service-user";


export class User {
  static async findAll(req: Request, res: Response) {
    try {

      ServiceUser.find(req, res);

    } catch (error) {
      console.log(error);
    };
  };

  static async createUser(req: Request, res: Response) {
    try {
      
      ServiceUser.create(req, res);

      // Aca iria algo con los tests... supongo?
    } catch (error) {
      console.log(error);
    };
  };

  static async updateUser(req: Request, res: Response) {
    try {

      ServiceUser.update(req, res);

    } catch (error) {
      console.log(error);
      return res.status(500).json('Error Update');
    };
  };

  static async deleteUser(req: Request, res: Response) {
    try {

      ServiceUser.delete(req, res);

    } catch (error) {
      console.log(error);
      return res.status(500).json('error delete');
    };
  };

  static async findById(req: Request, res: Response) {
    try {

      ServiceUser.findById(req, res);

    } catch (error) {
      console.log(error);
      return res.status(500).json('findById error');
    };
  };
};