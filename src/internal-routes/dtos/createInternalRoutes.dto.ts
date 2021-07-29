import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateInternalRouteDTO {
  @IsNotEmpty({
    message: 'Informe a origem da rota',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })

  origin_id: string;
  destination_id: string;
  qrcodeTag: string;
  destinationTag: string;
  steps: string;
  nextQrcodeTags: string;
}