import { IsString, IsNotEmpty, IsNumber, Contains } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  title?: string;

  @IsString()
  @Contains('active' || 'inactive', {
    message: 'Accepted status: active or inactive',
  })
  status?: string;

  @IsNumber()
  price?: number;

  @IsString()
  sku?: string;

  @IsNumber()
  gtin?: number;

  @IsString()
  brand?: string;

  @IsString()
  description?: string;

  @IsString()
  category?: string;
}
