import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min } from 'class-validator';

export class GenerateItineraryDto {
  @ApiProperty({
    example: 'São Paulo',
  })
  @IsString()
  departure: string;

  @ApiProperty({
    example: 'Gramado',
  })
  @IsString()
  destination: string;

  @ApiProperty({
    example: "01-01-2030", //mm-dd-yyyy
  })
  @IsString()
  departure_date: string

  @ApiProperty({
    example: 5,
  })
  @IsInt()
  @Min(1)
  days: number;
  
  @ApiProperty({
    example: 2,
  })
  @IsInt()
  @Min(1)
  travelers: number

  @ApiProperty({
    example: 3000,
  })
  @IsInt()
  budget: number;
}