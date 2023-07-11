import { ApiProperty } from '@nestjs/swagger';
import { ICreateClientCommand } from '../../domain/commands/create.client.command.interface';
import { IsNumber, IsString, Min } from 'class-validator';
import {
  IsNotBlankString,
  IsNotEmptyString,
  MinMax,
} from '@nestjsi/class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class CreateClientCommand implements ICreateClientCommand {
  @ApiProperty()
  @IsNumber()
  @MinMax(1, 3)
  /**
   * Type of the client (customer, employed, admin).
   *
   * @type {number}
   * @memberof CreateClientCommand
   */
  typeClient: number;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Full name of the client.
   *
   * @type {string}
   * @memberof CreateClientCommand
   */
  fullName: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  /**
   * Status of the client.
   *
   * @type {string}
   * @memberof CreateClientCommand
   */
  status: number;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Phone of the client.
   *
   * @type {string}
   * @memberof CreateClientCommand
   */
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Departament of the client.
   *
   * @type {string}
   * @memberof CreateClientCommand
   */
  departament: string;

  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  /**
   * Document of the client.
   *
   * @type {string}
   * @memberof CreateClientCommand
   */
  document: string;
}
