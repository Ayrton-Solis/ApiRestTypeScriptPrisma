import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "./config";

export function createAccesToken(payload: string | object | Buffer) {

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      { expiresIn: "1d", },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    )
  })
}