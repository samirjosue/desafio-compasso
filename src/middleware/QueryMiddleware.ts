import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export async function checkRequiredQueryParams(request: Request, response: Response, next: NextFunction) {
  // if(!request.query.estado){
  //   throw new AppError(`"estado" param é necessário`);
  // }
  if(!request.query.nome){
    throw new AppError(`"cidade" param é necessário`);
  }
  
  next();
}