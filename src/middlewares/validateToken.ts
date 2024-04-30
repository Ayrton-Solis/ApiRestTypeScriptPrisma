import { NextFunction, Request, Response } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { TOKEN_SECRET } from "../tokens/config";

export const authRequired = (req: Request, res: Response, next: NextFunction) => {
  

  const {token} = req.cookies;
  
  if (!token) {
    return res.json({ message: 'No token, authorization denied' });
  }

  jwt.verify(token, TOKEN_SECRET, (err: VerifyErrors | null, user?: object | string) => {
    if (err) { return res.status(403).json({ 'message': 'Invalid token' }) };

    console.log(user);
    
  });
  

  next();
};