import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
