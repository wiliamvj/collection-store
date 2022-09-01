import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  title?: string;

  @IsNotEmpty()
  @IsNumber()
  price?: number;

  @IsNotEmpty()
  @IsString()
  sku?: string;

  @IsNotEmpty()
  @IsNumber()
  gtin?: number;

  @IsNotEmpty()
  @IsString()
  brand?: string;

  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  category?: string;
}
