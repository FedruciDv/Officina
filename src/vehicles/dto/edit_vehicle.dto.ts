import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator';

export default class EditVehicleDTO{
  @IsUUID()
  @IsNotEmpty()
  @Expose()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Expose()
  userId?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Expose()
  plate?: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Expose()
  model?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Expose()
  brand?: string;

}
