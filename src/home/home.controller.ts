import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class HomeController {
  @Get('/')
  getHome(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'views', 'home.html'));
  }

  @Get('/login')
  getLogin(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'views', 'login.html'));
  }

  @Get('/register')
  getRegister(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'views', 'register.html'));
  }

  @Get('/admin')
  getAdmin(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'views', 'admin.html'));
  }
}
