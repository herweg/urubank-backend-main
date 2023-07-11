import { ApiProperty } from '@nestjs/swagger';
import { IFindByIdClientCommand } from '../../domain/commands/findbyid.client.command.interface';
import { IsNotBlankString, IsNotEmptyString } from '@nestjsi/class-validator';
import { IsString, IsUUID } from 'class-validator';
import { IsSingleLine } from '@nestjsi/class-validator/is/is-single-line';

export class FindByIdClientCommand implements IFindByIdClientCommand {
  @ApiProperty()
  @IsString()
  @IsNotBlankString()
  @IsNotEmptyString()
  @IsSingleLine()
  @IsUUID()
  /**
   * UUID for find.
   *
   * @type {string}
   * @memberof FindByIdClientCommand
   */
  id: string;
}
