import jwt from "jsonwebtoken";

export function createAccesToken(payload: string | object | Buffer) {

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "Some secret key",
      { expiresIn: "1d", },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    )
  })
}