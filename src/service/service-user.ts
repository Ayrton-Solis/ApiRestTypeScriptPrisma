import { Request, Response } from "express";
import { DataBaseUser } from "../repository/repositoy-user";


export class ServiceUser {
  static async create(req: Request, res: Response){
    try {
      const { email, name } = req.body

      await DataBaseUser.create(email, name);
      
    } catch (error) {
      console.log(error);
    };
  };
  static async find(req: Request, res: Response){
    try {
      const users = await DataBaseUser.find();
      
      return res.json(users);

    } catch (error) {
      console.log(error);
    };
  };
  static async update(req: Request, res: Response){
    try {
      
      const { email, name } = req.body
      const id: number = Number(req.params.id);
      await DataBaseUser.update(id, email, name);

    } catch (error) {
      console.log(error);
    };
  };
  static async delete(req: Request, res: Response){
    try {

      const id: number = Number(req.params.id)
      DataBaseUser.delete(id);

    } catch (error) {
      console.log(error);
    };
  };
  static async findById(req: Request, res: Response){
    try {
      
      const id:number = Number(req.params.id);
      const user = await DataBaseUser.findById(id);
      return res.json(user);

    } catch (error) {
      console.log(error);
    };
  };
};