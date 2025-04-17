import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDate,
  IsUUID,
  IsISO8601,
  IsObject,
  IsInt
} from 'class-validator';

export default class VehicleDTO {
  @IsUUID()
  @IsNotEmpty()
  @Expose()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  plate : string

  @IsString()
  @IsNotEmpty()
  @Expose()
  model: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  brand: string;

  @IsInt()
  @IsNotEmpty()
  @Expose()
  km: number

  @IsObject()
  @Expose()
  preventives?: object[]
}
