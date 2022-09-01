import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class AuthUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
