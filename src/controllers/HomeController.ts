import { Request, Response } from 'express';
class Home {
  public dashboard(req: Request, res: Response) {
    res.json({
      message: 'dash',
    });
  }
}

export const home = new Home();
