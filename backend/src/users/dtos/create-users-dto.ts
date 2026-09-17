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

  @ApiProperty({
    example: "https://lh3.googleusercontent.com/a/ACg8ocKLBFsEF9owNXphGXfNIJU6HqelKb4Fso-d-lwdcwHyC6aL3TA0kQ=s96-c",
  })
  @IsString()
  image: string;
}