import { Request, Response } from "express";
import { DataBaseUser } from "../repository/repositoy-user";


export class ServiceUser {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email, name } = req.body

      await DataBaseUser.create(email, name);

      return res.status(200).json('user created successfully');
      
    } catch (error) {
      console.log(error);
      return res.status(500).json('internal service error' + error);
    };
  };
  static async find(req: Request, res: Response): Promise<Response> {
    try {
      const users = await DataBaseUser.find();
      
      return res.status(200).json(users);

    } catch (error) {
      console.log(error);
      return res.status(500).json('internal service error' + error);
    };
  };
  static async update(req: Request, res: Response): Promise<Response> {
    try {
      
      const { email, name } = req.body
      const id: number = Number(req.params.id);
      await DataBaseUser.update(id, email, name);

      return res.status(200).json('user updated successfully');

    } catch (error) {
      return res.status(500).json('internal server error' + error);
    };
  };
  static async delete(req: Request, res: Response): Promise<Response> {
    try {

      const id: number = Number(req.params.id)
      DataBaseUser.delete(id);
      return res.status(200).json('user deleted successfully');

    } catch (error) {
      return res.status(500).json('internal server error' + error);
    };
  };
  static async findById(req: Request, res: Response): Promise<Response> {
    try {
      
      const id:number = Number(req.params.id);
      const user = await DataBaseUser.findById(id);
      return res.status(200).json(user);

    } catch (error) {
      return res.status(500).json('internal server error' + error);
    };
  };
};