import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsDate,
  IsOptional,
  IsISO8601,
  IsUUID
} from 'class-validator';

export default class CreateVehicleDTO {
  @IsUUID()
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
}
