import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/* 
Body struct:
{
    "name": "Estevao",
    "email": "estevao@gmail.com",
}
*/

export class CreateUsersDto {
  @ApiProperty({
    example: 'Pablo',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "pablo@gmail.com",
  })
  @IsString()
  email: string;
}