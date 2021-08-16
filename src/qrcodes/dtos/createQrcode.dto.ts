import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateQrcodeDTO {
  @IsNotEmpty({
    message: 'Informe o nome do qrcode',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })

  name: string;
  building_id: string;
  sector_id: string;
  subsector_id: string;
}
