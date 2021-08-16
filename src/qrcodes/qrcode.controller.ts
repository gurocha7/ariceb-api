import { Body, Controller, Delete, Post, Put ,Query, HttpStatus, Get, Param } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Qrcode } from './qrcode.entity';
import { QrcodeService } from './qrcode.service'

import { CreateQrcodeDTO} from './dtos/createQrcode.dto'

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
  async listQrcodes(): Promise<Qrcode[]>{
    return await this.qrcodeService.listQrcodes()
  }

  @Get(':id')
  async getQrcodeById(@Param('id') id: string): Promise<Qrcode>{
    return await this.qrcodeService.getQrcodeById(id);
  }

  @Delete(':id')
  async deleteSector(@Param('id') id: string): Promise<String>{
    const result = await this.qrcodeService.deleteQrcode(id)
    return result
  }
}
