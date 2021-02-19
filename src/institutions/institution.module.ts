import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionRepository } from './institution.repository';
// import { SectorService } from './sector.service';
// import { SectorController } from './sector.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InstitutionRepository])],
//   providers: [SectorService],
//   controllers: [SectorController],
})
export class InstitutionModule {}