import { Request, Response } from "express";
import prisma from "../db";


export class user {
  static async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const allUsers = await prisma.user.findMany()
      console.log(allUsers);
      
      return res.json(allUsers);
    } catch (error) {
      console.log(error);
      return res.status(500).json('Internal server error');
    }
  }

  static async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const newUser = await prisma.user.create({
        data: req.body,
      });
      console.log('olabarria');
      return res.json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json('Internal server error');
    }
  }
};