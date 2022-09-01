import { Request, Response } from 'express';

class UploadImageController {
  handle(req: Request, res: Response) {
    const image = req.file;

    console.log(image);
    res.json(image);
  }
}

export { UploadImageController };
