import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createUserDto } from './createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers() {
    const users = this.userService.find();
    return users;
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    const user = this.userService.findOne({ where: { id } });
    return user;
  }
  @Post('new')
  async createUser(@Body() createUserDto: createUserDto) {
    const existing_user = await this.userService.findOne({
      where: { email: createUserDto.email },
    });
    if (existing_user) return { msg: 'user already taken' };

    const user = this.userService.save({ ...createUserDto });
    return user;
  }
}
