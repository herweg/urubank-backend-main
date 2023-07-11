import { ApiProperty } from '@nestjs/swagger';
import { IUpdateClientCommand } from '../../domain/commands/update.client.command.interface';
import {
  IsNotBlankString,
  IsNotEmptyString,
  MinMax,
} from '@nestjsi/class-validator';
import { IsString, IsUUID, IsNumber, Min } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class UpdateClientCommand implements IUpdateClientCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID of the client.
   *
   * @type {string}
   * @memberof UpdateClientCommand
   */
  id: string;

  @ApiProperty()
  @IsNumber()
  @MinMax(1, 3)
  /**
   * Type of the client (customer, employed, admin).
   *
   * @type {number}
   * @memberof UpdateClientCommand
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
   * @memberof UpdateClientCommand
   */
  fullName: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  /**
   * Status of the client.
   *
   * @type {number}
   * @memberof UpdateClientCommand
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
   * @memberof UpdateClientCommand
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
   * @memberof UpdateClientCommand
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
   * @memberof UpdateClientCommand
   */
  document: string;
}
