import { MinLength, MaxLength } from 'class-validator';

export class createUserDto {
  @MinLength(1)
  @MaxLength(20)
  readonly first_name: string;
  @MinLength(1)
  @MaxLength(20)
  readonly last_name: string;
  @MinLength(1)
  @MaxLength(20)
  readonly password: string;
}
