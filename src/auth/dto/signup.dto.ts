import { Expose } from "class-transformer";
import { IsEmail, IsISO8601, IsNotEmpty, isString, IsString } from "class-validator";

export class SignUpDTO{
 @IsEmail()
  @IsNotEmpty()
@Expose()
  email: string;

  @IsString()
  @IsNotEmpty()
@Expose()
  phone: string;

  @IsString()
  @IsNotEmpty()
@Expose()
  password: string;

  @IsString()
  @IsNotEmpty()
@Expose()
  username: string;

  @IsString()
  @IsNotEmpty()
@Expose()
  license_code: string;

  @IsISO8601() 
  @IsNotEmpty()
@Expose()
  license_expiration_date: Date;

  @IsString()
  @IsNotEmpty()
@Expose()
  first_name: string;

  @IsString()
  @IsNotEmpty()
@Expose()
  last_name: string;

  @IsString()
  @IsNotEmpty()
@Expose()
  municipality_residence: string;

  @IsString()
  @IsNotEmpty()
@Expose()
  fiscal_code: string;

  @IsString()
  @IsNotEmpty()
@Expose()
  status: string;
}