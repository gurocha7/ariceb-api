import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { BuildingsModule } from './buildings/buildings.module';
import { SectorModule } from './sectors/sector.module';
import typeOrmConfig from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeOrmConfig'),
    }),
    ClientsModule,
    BuildingsModule,
    SectorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
