import { Request, Response } from "express";
import { RepositoryUser } from "../repository/user.repository";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../tokens/create.token";


export class ServiceUser {
  static async create(req: Request, res: Response){
    try {
      const { email, name, password } = req.body
      if (!email || !name || !password) {
        res.status(400).json({ message: 'Please complete all fields ' })
      };

      const hash = await bcrypt.hash(password, 10);
      
      const { id } = await RepositoryUser.create(email, name, hash);
      // Este parametro solo puede resivir string, objeto o buffer, por eso es un objeto en vez de un number directo
      const token = await createAccesToken({ id: id })

      return token;

    } catch (error) {
      console.log(error);
    };
  };
  static async find(req: Request, res: Response){
    try {
      const users = await RepositoryUser.find();
      
      return res.json(users);

    } catch (error) {
      console.log(error);
    };
  };
  static async update(req: Request, res: Response){
    try {
      
      const { email, name } = req.body
      const id: number = Number(req.params.id);
      await RepositoryUser.update(id, email, name);

    } catch (error) {
      console.log(error);
    };
  };
  static async delete(req: Request, res: Response){
    try {

      const id: number = Number(req.params.id)
      RepositoryUser.delete(id);

    } catch (error) {
      console.log(error);
    };
  };
  static async login(req: Request, res: Response){
    try {
      
      const { email, password } = req.body

      const user = await RepositoryUser.findUnique(email);
      if (!user) { res.status(400).json({ message: 'user not found' }) };

      const isMatch = await bcrypt.compare(password, user?.password!)
      if (!isMatch) { res.status(400).json({ message: 'incorrect password' }) };

      // Este parametro solo puede resivir string, objeto o buffer, por eso es un objeto en vez de un number directo
      const token = await createAccesToken({ id: user?.id });

      res.cookie('token', token).json({ meesage: `Felicidades ${user?.name}, Logeo exitoso, tu token de validacion es ${token}` });

    } catch (error) {
      console.log(error);
    };
  };
  static logout(req: Request, res: Response){
    try {
      res.cookie('token', '',{ expires: new Date(0) }).json({ message: 'logout successfully' });
    } catch (error) {
      console.log(error);
    }
  };
};