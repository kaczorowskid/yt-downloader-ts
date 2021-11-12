import { Request, Response } from "express";

export type IExpressMiddleware<RequestBody, RequestQuery> =
    (req: Request<any, any, RequestBody, RequestQuery>, res: Response) => Promise<void> | void;


