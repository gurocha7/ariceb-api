import { Body, Controller, Delete, Post, Put ,Query, HttpStatus, Get, Param } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Qrcode } from './qrcode.entity';
import { QrcodeService } from './qrcode.service'

import { CreateQrcodeDTO} from './dtos/createQrcode.dto'
import { ListQrcode, QrcodeInformation } from './dtos/listQrcode.dto';

@Controller('v1/qrcode')
export class QRCodeController {
  constructor(private qrcodeService: QrcodeService) {}

  @Post()
  @ApiOperation({
    summary: 'Criando um qrcode',
  })
  @ApiResponse({
    description: 'QRCode criado.',
    status: HttpStatus.OK,
    type: CreateQrcodeDTO,
  })
  async createQrcode(
    @Body() createQrcodeDTO: CreateQrcodeDTO,
  ): Promise<Qrcode> {
    return await this.qrcodeService.createQrcode(createQrcodeDTO);
  }

  @Get()
  @ApiOperation({
  summary: 'Pegando qrcode',
  })
  @ApiResponse({
  description: 'QRCODE obtido com sucesso',
  status: HttpStatus.OK,
  type: ListQrcode,
  })
  async getQrcodeByName(@Body() info: QrcodeInformation): Promise<ListQrcode>{
    return await this.qrcodeService.getQrcodeByName(info);
  }

  @Delete(':id')
  async deleteSector(@Param('id') id: string): Promise<String>{
    const result = await this.qrcodeService.deleteQrcode(id)
    return result
  }
}
