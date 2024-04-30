import { Request } from "express";
import UserInterface from "./userInterface";

interface RequestWithUser extends Request {
  
  user: UserInterface

}

export default RequestWithUser;
