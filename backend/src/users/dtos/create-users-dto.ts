import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class CreateUsersDto {
  @ApiProperty({
    example: 'Pablo',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "pablo@gmail.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "https://lh3.googleusercontent.com/a/ACg8ocKLBFsEF9owNXphGXfNIJU6HqelKb4Fso-d-lwdcwHyC6aL3TA0kQ=s96-c",
  })
  @MinLength(8)
  password: string;
}

export class EditCountryDto{
  @ApiProperty({
    example: '8ab672ae-c515-46da-a3a3-3b47a4ba4c7c',
  })
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    example: 'Brazil',
  })
  @IsNotEmpty()
  country: string;
}